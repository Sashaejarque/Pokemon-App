import React, { useState } from 'react';
import { Header } from '..';
import { useNavigate } from 'react-router';
import './PantallaInicial.css';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

export const PantallaInicial = () => {
  //State del input
  const [infoInput, setInfoInput] = useState({
    input: '',
  });
  const handleChange = (e) => {
    setInfoInput({
      ...infoInput,
      [e.target.name]: e.target.value,
    });
  };
  const { input } = infoInput;

  //State del select
  const [infoSelect, setInfoSelect] = useState({
    select: '',
  });

  const handleChangeSelect = (e) => {
    setInfoSelect({
      ...infoSelect,
      [e.target.name]: e.target.value,
    });
  };

  const { select } = infoSelect;

  //Funcion validacion del formulario y redirect home
  const submitForm = (e) => {
    e.preventDefault();
    console.log(select);
    console.log(input);
    //validar
    if (input.trim() === '' || select.trim() === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
    redirectHome();
  };

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
              label="Ingrese su nombre:"
              marginVertical={16}
              name="input"
              handleEvent={handleChange}
            />

            <Select
              data={[{ label: 'Masculino' }, { label: 'Femenino' }]}
              placeholder="Selecciona un genero"
              label="Selecciona un genero:"
              marginVertical={16}
              name="select"
              handleEvent={handleChangeSelect}
            />
          </div>
          <button
            //onSubmit={submitForm && redirectHome}
            onClick={submitForm}
          >
            Ver pokemons!
          </button>
        </div>
      </div>
    </div>
  );
};
