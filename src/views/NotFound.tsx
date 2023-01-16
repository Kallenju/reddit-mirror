import React from 'react';

export default function NotFound(): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reddit Mirror</title>
        <meta name="description" content="Reddit Mirror" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="//static/images/raster/favicon/favicon-192x192.png"
        />
        <link
          rel="preload"
          href="//static/fonts/roboto-regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="//static/fonts/roboto-medium.woff2"
          as="font"
          type="font/woff2"
        />

        <link rel="stylesheet" href="//static/styles/fonts/fonts.css" />
        <link rel="stylesheet" href="//static/styles/notfound/notfound.css" />
      </head>
      <body>
        <div className="not-found">
          <h1 className="not-found__title">404 — Not Found</h1>
        </div>
      </body>
    </html>
  );
}
