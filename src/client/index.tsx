import React, { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import AssetsMap from '../interfaces/AssetsMap';
import { RootState, store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import useToken from '../hooks/useToken';
import useUserData from '../hooks/useUserData';
import App from '../App';

declare global {
  interface Window {
    __ASSETS_MAP__?: AssetsMap;
    __PRELOADED_STATE__?: RootState;
  }
}

interface ClientAppProps {
  assetsMap: AssetsMap;
}

function ClientApp({ assetsMap }: ClientAppProps): React.ReactElement {
  useToken();
  useUserData();

  return <App assetsMap={assetsMap} />;
}

hydrateRoot(
  document,
  <StrictMode>
    <Provider store={store} serverState={window.__PRELOADED_STATE__}>
      <BrowserRouter>
        <ClientApp assetsMap={window.__ASSETS_MAP__ || {}} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

delete window.__ASSETS_MAP__;
delete window.__PRELOADED_STATE__;
