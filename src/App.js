// imports
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultados from './components/Resultados';
import './styles.css';

const App = () => {
  const [usuarios, setUsuarios] = useState([
    {
      nombre: 'Jose',
      email: 'joseodavila@gmail.com',
      telefono: '0987599338'
    },
    {
      nombre: 'Dayana',
      email: 'dra.dayanarosero@gmail.com',
      telefono: '0992715473'
    }
  ]);

  const agregarUsuario = (nuevoUsuario) => {
    // verifico correo o  teléfono  si ya existe
    const correoExistente = usuarios.some(usuario => usuario.email === nuevoUsuario.email);
    const telefonoExistente = usuarios.some(usuario => usuario.telefono === nuevoUsuario.telefono);

    if (correoExistente || telefonoExistente) {
      alert('El correo electrónico o el teléfono ya existe en la lista de usuarios.');
    } else {
      setUsuarios([...usuarios, nuevoUsuario]);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="text-center">PSYCODE</h1>
        <div className="form-container">
          <h2>Ingrese los datos:</h2>
          <Formulario agregarUsuario={agregarUsuario} />
        </div>
        <div className="result-container">
          <Resultados usuarios={usuarios} />
        </div>
      </div>
    </div>
  );
};

export default App;
