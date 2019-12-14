import React, { useState, useEffect } from 'react';

import './List.css';
import Header from '../../Components/Header/Header';
import SensorList from '../../Components/SensorList';
import api from '../../services/api';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/sensor')
      .then(response => setList(response.data))
      .catch(err => {
        console.log(err);
        alert('Não foi possível recuperar registros!');
      });
  }, []);

  return (
    <>
      <Header />

      <h1 className="titulo">Sensores Cadastrados</h1>

      <table className="table table-primary container">
        <thead>
          <tr>
            <th>Altura</th>
            <th>Largura</th>
            <th>Comprimento</th>
            <th>Tensão</th>
            <th>Marca</th>
            <th>Tipo do Sensor</th>
            <th>Última Medida</th>
            <th>Localização</th>
          </tr>
        </thead>

        <tbody>
          {
            list.map(sensor => (
              <SensorList sensor={sensor} key={sensor.id} />
            ))
          }
        </tbody>
      </table>
    </>
  );
}
