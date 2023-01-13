import './assets/styles/main.global.styl';
import React from 'react';
import AssetsMap from './interfaces/AssetsMap';
import { Navigate, Routes, Route, Outlet } from 'react-router-dom';
import Index from './views/Index';
import Header from './shared/Header';
import Main from './shared/Main';
import Longread from './shared/Longread';
import Shortread from './shared/Shortread';
import NotFound from './shared/NotFound';

interface AppProps {
  assetsMap: AssetsMap;
}

export default function App({ assetsMap }: AppProps): React.ReactElement {
  return (
    <Index assetsMap={assetsMap}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/auth" element={<Navigate replace to="/posts" />} />
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
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Index>
  );
}
