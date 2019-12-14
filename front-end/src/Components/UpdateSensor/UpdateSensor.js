import React, { useState } from 'react';

import './UpdateSensor.css';
import info from '../../assets/info.svg';
import api from '../../services/api';

export default function UpdateSensor() {
  const [id, setId] = useState('');
  const [lastMeasure, setLastMeasure] = useState('');
  const [location, setLocation] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    api.put(`/sensor/${id}/update`, {
      lastMeasure,
      location
    }).then(res => {
      if (res.status === 200) {
        alert('Sensor Atualizado!');
      }
    }).catch(err => {
      console.log(err);
      alert('Não foi possível atualizar o sensor!');
    })
  }

  return (
    <section className="card-custom update-sensor">
      <div className="header-card">
        <h4>Atualizar Sensor</h4>
        <div className="tooltip-custom">
          <span className="tooltiptext-custom">Edite o valor das propriedades do sensor</span>
          <img src={info} alt="Adicionar" className="add-icon" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastMeasure">Identificação *</label>
        <input type="number" placeholder="Digite o ID do sensor a ser alterado" required onChange={e => setId(e.target.value)} />
        <label htmlFor="lastMeasure">Última Medição *</label>
        <input type="number" placeholder="Digite o último valor do sensor" onChange={e => setLastMeasure(e.target.value)} />
        <label htmlFor="location">Localização *</label>
        <input type="text" placeholder="Digite a última localização do sensor" onChange={e => setLocation(e.target.value)} />
        <div>
          <button type="submit" className="btn-save btn">Salvar</button>
          <button type="reset" className="btn-cancel btn">Cancelar</button>
        </div>
      </form>
    </section>
  );
}
