import React from 'react';
import { CardPokemon} from '..';
import { useNavigate } from 'react-router';
import './PantallaInicial.css';

export const PantallaInicial = () => {
  
  let navigate = useNavigate();
  let redirectHome = () => {
    navigate('/home');
  }
  
  return (
    <div className="app-container2">
    <div className="form-content">
       <div className="titulo-inicial">
         <a>Bienvenidos entrenadores pokemon!</a>
       </div>

       <div className="form-inicial">
         <div className="one">
           <div className="label-form">
             <label>Ingresa tu nombre:</label>
           </div>
           <input type="text" name="nombre" id="nombre"/>
         </div>
         <div className='two'>
           <div className="label-form">
             <label>Selecciona tu genero:</label>
           </div>

           <select name="Genero">
             <option value="">--Selecciona un genero--</option>
             <option value="">Masculino</option>
             <option value="">Femenino</option>
           </select>
         </div>
       </div>
     </div>
     <button onClick={redirectHome}>Ver pokemons!</button>
   </div>
  );
};