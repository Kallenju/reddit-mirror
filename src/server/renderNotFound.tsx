import path from 'path';
import url from 'url';
import dotenv from 'dotenv';

const __dirname: string = path.dirname(url.fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.NODE_ENV}.env`),
});

const { SSR_ABORT_DELAY } = process.env;

import { Response } from 'express';
import React, { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import NotFound from '../views/NotFound';

const isCrawler = false;

export default function render(url: string, response: Response): void {
  let didError = false;

  const stream: ReturnType<typeof renderToPipeableStream> =
    renderToPipeableStream(
      <StrictMode>
        <NotFound />
      </StrictMode>,
      {
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
