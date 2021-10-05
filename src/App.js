import React, { useState, useEffect, Fragment } from 'react';
import { Route, Routes, BrowserRouter, Link, useNavigate } from 'react-router-dom';
import '@fontsource/karla';
import { PantallaInicial } from './components';
import { Home } from './components/Home';
import { Error404 } from './components/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PantallaInicial />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
