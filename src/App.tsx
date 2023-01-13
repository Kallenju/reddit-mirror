import './assets/styles/main.global.styl';
import React from 'react';
import AssetsMap from './interfaces/AssetsMap';
import { Routes, Route, Outlet } from 'react-router-dom';
import Index from './views/Index';
import Header from './shared/Header';
import Main from './shared/Main';
import Longread from './shared/Longread';
import Shortread from './shared/Shortread';

interface AppProps {
  assetsMap: AssetsMap;
}

export default function App({ assetsMap }: AppProps): React.ReactElement {
  return (
    <Index assetsMap={assetsMap}>
      <Routes>
        <Route
          path="/posts"
          element={
            <>
              <Header />
              <Main />
              <Outlet />
            </>
          }
        >
          <Route path=":id" element={<Longread />} />
          <Route path=":id/comments" element={<Shortread />} />
        </Route>
      </Routes>
    </Index>
  );
}
