import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({ agregarUsuario }) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación POST al BE
    const nuevoUsuario = {
      email,
      nombre,
      telefono,
    };

    // POST al BE
    // const response = await axios.post('/api/usuarios', nuevoUsuario);
    
    // GET del BE
    // const { data } = response;

    agregarUsuario(nuevoUsuario);
    
    // limpiar los campos
    setEmail('');
    setNombre('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <br />
      <label>Teléfono:</label>
      <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
