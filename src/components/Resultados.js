import React from 'react';

const Resultados = ({ usuarios }) => {
  return (
    <div>
      <h2>Resultados:</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <strong>{index + 1}. Email:</strong> {usuario.email}, <strong>Nombre:</strong> {usuario.nombre}
            {usuario.telefono && <>, <strong>Teléfono:</strong> {usuario.telefono}</>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resultados;
