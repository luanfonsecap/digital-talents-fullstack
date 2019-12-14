import React from 'react';

import './UpdateSensor.css';
import info from '../../assets/info.svg';

export default function UpdateSensor() {

  return (
    <section className="card-custom update-sensor">
      <div className="header-card">
        <h4>Atualizar Sensor</h4>
        <div className="tooltip-custom">
          <span className="tooltiptext-custom">Edite o valor das propriedades do sensor</span>
          <img src={info} alt="Adicionar" className="add-icon" />
        </div>
      </div>
      <form onsubmit="">
        <label for="lastMeasure">Identificação *</label>
        <input type="number" placeholder="Digite o ID do sensor a ser alterado" required />
        <label for="lastMeasure">Última Medição *</label>
        <input type="number" placeholder="Digite o último valor do sensor" required />
        <label for="location">Localização *</label>
        <input type="text" placeholder="Digite a última localização do sensor" required />
        <div>
          <button type="submit" className="btn-save btn">Salvar</button>
          <button type="reset" className="btn-cancel btn">Cancelar</button>
        </div>
      </form>
    </section>
  );
}
