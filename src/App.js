import React, { useState, useEffect, Fragment } from 'react';
import { Route, Routes, BrowserRouter, Link, useNavigate } from 'react-router-dom';
import '@fontsource/karla';
import { PantallaInicial } from './components';
import { Home } from './components/Home';
import { Error404 } from './components/Error404/Error404';
import {Pokedex} from './components/Pokedex/Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pokemon-App" element={<PantallaInicial />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
