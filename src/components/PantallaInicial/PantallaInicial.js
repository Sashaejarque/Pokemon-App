import React, { useEffect, useState } from 'react';
import { Header } from '..';
import { useNavigate } from 'react-router';
import './PantallaInicial.css';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const PantallaInicial = () => {
  //State del input
  const [infoInput, setInfoInput] = useLocalStorage('infoInput', '');

  const handleChangeInput = (e) => {
    setInfoInput(e.target.value);
  };
  const { input } = infoInput;

  //State del select
  const [infoSelect, setInfoSelect] = useLocalStorage('infoSelect', '');

  const handleChangeSelect = (e) => {
    setInfoSelect(e.target.value);
  };

  const { select } = infoSelect;

  //Funcion validacion del formulario y redirect home
  const submitForm = (e) => {
    e.preventDefault();
    //validar
    if (infoInput.trim() === '' || infoSelect === 'Selecciona un genero') {
      alert('Todos los campos son obligatorios');
      return;
    }
    redirectHome();
  };

  let navigate = useNavigate();
  let redirectHome = () => {
    navigate('https://sashaejarque.github.io/Pokemon-App/home');
  };
 
  useEffect(() => {
    if ( infoInput && infoSelect)  {
      redirectHome();
    }
  }, []);

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
              label="Ingrese su nombre:"
              marginVertical={16}
              name="input"
              handleEvent={handleChangeInput}
              value={infoInput}
            />

            <Select
              data={[{ label: 'Masculino' }, { label: 'Femenino' }]}
              placeholder="Selecciona un genero"
              label="Selecciona un genero:"
              marginVertical={16}
              name="select"
              handleEvent={handleChangeSelect}
              value={infoSelect}
            />
          </div>
          <button className='button-pantalla-inicial'onClick={submitForm}>Ver pokemons!</button>
        </div>
      </div>
    </div>
  );
};

/*

*/
