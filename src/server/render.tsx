import path from 'path';
import fs from 'fs';
import { Response } from 'express';
import crypto from 'crypto';
import React, { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import AssetsMap from '../interfaces/AssetsMap';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { RootState, store } from '../store';
import App from '../App';

const isCrawler = false;
const pathToAssetsMap = path.resolve(process.cwd(), 'dist/assetsMap.json');
const __ASSETS_MAP__: AssetsMap = JSON.parse(
  fs.readFileSync(pathToAssetsMap, 'utf8')
).main;
const __PRELOADED_STATE__: RootState = store.getState();
const toBootstrapScriptContent = `window.__ASSETS_MAP__ = ${JSON.stringify(
  __ASSETS_MAP__
).replace(/</g, '\\u003c')}; window.__PRELOADED_STATE__ = ${JSON.stringify(
  __PRELOADED_STATE__
).replace(/</g, '\\u003c')};`;

export default function render(url: string, response: Response): void {
  const nonce = crypto.randomBytes(16).toString('base64');

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
        bootstrapScriptContent: toBootstrapScriptContent,
        nonce,
        bootstrapScripts: [`/static/${__ASSETS_MAP__.js}`],
        onShellReady() {
          if (!isCrawler) {
            response.statusCode = didError ? 500 : 200;
            response.setHeader('content-type', 'text/html');
            if (process.env.NODE_ENV === 'production') {
              response.setHeader(
                'Content-Security-Policy',
                `script-src 'self' 'nonce-${nonce}'`
              );
            }
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
            if (process.env.NODE_ENV === 'production') {
              response.setHeader(
                'Content-Security-Policy',
                `script-src 'self' 'nonce-${nonce}'`
              );
            }
            stream.pipe(response);
          }
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );
  setTimeout(() => stream.abort(), Number(__SSR_ABORT_DELAY));
}
