import React from 'react';
import { Header } from '..';
import { useNavigate } from 'react-router';
import './PantallaInicial.css';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

export const PantallaInicial = () => {
  let navigate = useNavigate();

  let redirectHome = () => {
    navigate('/home');
  };

  return (
    <div className="cont-container">
      <Header />
      <div className="app-container2">
        <div className="form-content">
          <div className="titulo-inicial">
            <a>Bienvenidos entrenadores pokemon!</a>
          </div>

          <div className="form-inicial">
            <Input
              placeholder="Ingrese su nombre"
              type="text"
              styleclass="one"
              label="Ingrese su nombre:"
              classlabel="label-form"
            />

            <Select
              data={[{ label: 'Masculino' }, { label: 'Femenino' }]}
              placeholder="Selecciona un genero"
              styleclass="two"
              labelclass="label-form"
              label="Selecciona un genero:"
            />
          </div>
          <button onClick={redirectHome}>Ver pokemons!</button>
        </div>
      </div>
    </div>
  );
};

/*  
            
      <div className="form-inicial">
            <div className="one">
              <div className="label-form">
                <label>Ingresa tu nombre:</label>
              </div>
              <Input placeholder="Ingrese su nombre" type="text" />
            </div>      
             
            
            <div className="two">
              <div className="label-form">
                <label>Selecciona tu genero:</label>
              </div>
              <Select data={[{ label: 'Masculino' }, { label: 'Femenino' }]} placeholder="Selecciona un genero" />
            </div>
            
            */
