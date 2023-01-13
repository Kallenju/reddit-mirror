import path from 'path';
import url from 'url';
import dotenv from 'dotenv';

const __dirname: string = path.dirname(url.fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.DOTENV}.env`),
});

const { NODE_ENV = 'production', SSR_ABORT_DELAY = 10000 } = process.env;

import fs from 'fs';
import { Response } from 'express';
import React, { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import AssetsMap from '../interfaces/AssetsMap';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { RootState, store } from '../store';
import App from '../App';

const isCrawler = false;
const pathToAssetsMap = path.resolve(
  __dirname,
  NODE_ENV === 'development' ? '../../dist/assetsMap.json' : '../assetsMap.json'
);

export default function render(url: string, response: Response): void {
  const __ASSETS_MAP__: AssetsMap = JSON.parse(
    fs.readFileSync(pathToAssetsMap, 'utf8')
  ).main;
  const __PRELOADED_STATE__: RootState = store.getState();

  let didError = false;

  const stream: ReturnType<typeof renderToPipeableStream> =
    renderToPipeableStream(
      <StrictMode>
        <Provider store={store}>
          <StaticRouter location={url}>
            <App assetsMap={__ASSETS_MAP__} />
          </StaticRouter>
        </Provider>
      </StrictMode>,
      {
        bootstrapScriptContent: `window.__ASSETS_MAP__ = ${JSON.stringify(
          __ASSETS_MAP__
        )}; window.__PRELOADED_STATE__ = ${JSON.stringify(
          __PRELOADED_STATE__
        ).replace(/</g, '\\u003c')};`,
        bootstrapScripts: [`/static/${__ASSETS_MAP__.js}`],
        onShellReady() {
          if (!isCrawler) {
            response.statusCode = didError ? 500 : 200;
            response.setHeader('content-type', 'text/html');
            stream.pipe(response);
          }
        },
        onShellError() {
          response.statusCode = 500;
          response.setHeader('content-type', 'text/html');
          response.send('<h1>Something went wrong</h1>');
        },
        onAllReady() {
          if (isCrawler) {
            response.statusCode = didError ? 500 : 200;
            response.setHeader('content-type', 'text/html');
            stream.pipe(response);
          }
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );
  setTimeout(() => stream.abort(), Number(SSR_ABORT_DELAY));
}
