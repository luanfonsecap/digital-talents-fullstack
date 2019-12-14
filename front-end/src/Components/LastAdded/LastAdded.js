import React, { useEffect, useState } from 'react';

import './LastAdded.css';
import info from '../../assets/info.svg';
import api from '../../services/api';
import UpdateSensor from '../UpdateSensor/UpdateSensor';

export default function LastAdded() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/sensor')
      .then(res => setList(res.data));
  }, []);

  async function handleDelete(id) {
    api.delete(`/sensor/${id}/delete`)
      .then(res => {
        if (res.status === 200) {
          alert('Registro Excluído!');
        }
        api.get('/sensor')
          .then(res => setList(res.data));
      }).catch(err => {
        console.log(err);
        alert('Não foi possível excluir registro!');
      })
  }

  return (
    <>
      <section className="last-added">
        <article className="card-custom">
          <div className="header-card">
            <h3>Últimos Adicionados</h3>
            <div className="tooltip-custom">
              <span className="tooltiptext-custom">Sensores adicionados recentemente</span>
              <img src={info} alt="Adicionar" className="add-icon" />
            </div>
          </div>
          <div>
            <table className="table table-dark">
              <thead>
                <th scope="col">Id</th>
                <th scope="col">Marca</th>
                <th scope="col">Ultima Medição</th>
                <th scope="col">Localização</th>
                <th scope="col">Ações</th>
              </thead>
              <tbody>
                {list.map(sensor => (
                  <tr key={sensor.id}>
                    <td>{sensor.id}</td>
                    <td>{sensor.brand}</td>
                    <td>{sensor.lastMeasure}</td>
                    <td>{sensor.location}</td>
                    <td className="btn" onClick={() => handleDelete(sensor.id)}>Excluir</td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </article>
        <UpdateSensor />
      </section>
    </>
  );
}
