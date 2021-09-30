import React, { useState, useEffect, Fragment } from 'react';
import { Route, Routes, BrowserRouter, Link, useNavigate } from 'react-router-dom';
import '@fontsource/karla';
import { Header } from './components';
import { PantallaInicial } from './components';
import { Home } from './components/CardPokemon/Home';

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PantallaInicial />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
