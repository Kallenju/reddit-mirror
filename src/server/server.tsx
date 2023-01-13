import path from 'path';
import url from 'url';
import dotenv from 'dotenv';

const __dirname: string = path.dirname(url.fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.DOTENV}.env`),
});

const {
  NODE_ENV = 'development',
  DEV_SERVER_PORT = 3000,
  PROD_SERVER_PORT = 3000,
} = process.env;

import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import helmet from 'helmet';
import retrievingMirrorRedditToken from './retrievingMirrorRedditToken';
import render from './render';
import renderNotFound from './renderNotFound';

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(compress());

app.use('/static', express.static('./dist/client'));

app.get('/auth', async (request: Request, response: Response) => {
  const mirrorRedditToken: string | void = await retrievingMirrorRedditToken(
    request
  );

  if (mirrorRedditToken) {
    const encodedCookieName: string = encodeURIComponent('access_token');
    const encodedToken: string = encodeURIComponent(mirrorRedditToken);

    response.cookie(encodedCookieName, encodedToken);
  }

  render(request.url, response);
});

app.get('/', (request: Request, response: Response) => {
  return response.redirect('/posts');
});

app.get('/posts', (request: Request, response: Response) => {
  render(request.url, response);
});

app.get('/posts/:id', (request: Request, response: Response) => {
  render(request.url, response);
});

app.get('/posts/:id/comments', (request: Request, response: Response) => {
  render(request.url, response);
});

app.get('/posts/:id/comments', (request: Request, response: Response) => {
  render(request.url, response);
});

app.get('*', (request: Request, response: Response) => {
  renderNotFound(request.url, response);
});

app.listen(
  Number(NODE_ENV === 'development' ? DEV_SERVER_PORT : PROD_SERVER_PORT)
);
