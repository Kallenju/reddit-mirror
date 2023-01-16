import { Request } from 'express';
import RedditToken from '../interfaces/RedditToken';

export default async function retrievingMirrorRedditToken(
  request: Request
): Promise<string | void> {
  const response: Response = await fetch(
    `https://www.reddit.com/api/v1/access_token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${__CLIENT_ID}:${__CLIENT_SECRET}`)}`,
      },
      body: `grant_type=authorization_code&code=${request.query.code}&redirect_uri=${__REDIRECT_URI}:${__REDIRECT_PORT}/auth`,
    }
  );

  if (response.ok) {
    const token: RedditToken = (await response.json()) as RedditToken;

    return token.access_token;
  }
}
