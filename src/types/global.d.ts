declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

declare global {
  export default interface Window {
    __ASSETS_MAP: {
      css?: string;
      js?: string;
    };
  }
}

declare const __CLIENT_ID: string;

declare const __CLIENT_SECRET: string;

namespace NodeJS {
  export default interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly BROWSERSLIST_ENV: 'development' | 'production';
    readonly URI: string;
    readonly PORT: string;
    readonly SSR_ABORT_DELAY: string;
    readonly DOTENV: string;
    readonly PROD_SERVER_PORT: string;
    readonly CLIENT_ID: string;
    readonly CLIENT_SECRET: string;
  }
}
