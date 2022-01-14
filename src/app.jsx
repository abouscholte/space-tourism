import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import GlobalStyle from './styles/global';
import Head from './components/base/head';
import Navigation from './components/base/navigation';

function Home() {
  return (
    <div style={{ padding: '0 55px' }}>
      <p>Welcome earthlings!</p>
      <Link to="/space">Go to space!</Link>
    </div>
  );
}

function Space() {
  return (
    <div style={{ padding: '0 55px' }}>
      <p>Welcome to space!</p>
      <Link to="/">It&apos;s too scary here, I want my mommy!</Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Head />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="space" element={<Space />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
