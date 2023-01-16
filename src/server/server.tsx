import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import helmet from 'helmet';
import retrievingMirrorRedditToken from './retrievingMirrorRedditToken';
import render from './render';
import renderNotFound from './renderNotFound';

const app = express();

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );
}

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

  return response.redirect('/best');
});

app.get('/', (request: Request, response: Response) => {
  return response.redirect('/best');
});

app.get(
  '/:api(best|new|top|hot|rising)',
  (request: Request, response: Response) => {
    render(request.url, response);
  }
);

app.get(
  '/:api(best|new|top|hot|rising)/:id',
  (request: Request, response: Response) => {
    render(request.url, response);
  }
);

app.get(
  '/:api(best|new|top|hot|rising)/:id/comments',
  (request: Request, response: Response) => {
    render(request.url, response);
  }
);

app.get('*', (request: Request, response: Response) => {
  renderNotFound(request.url, response);
});

app.listen(Number(__PORT));
