import React from 'react';

import './AddSensor.css';
import info from '../../assets/info.svg';

export default function AddSensor() {

  return (
    <>
      <section className="add-sensor card-custom">

        <div class="header-card">
          <h2>Adicionar Sensor</h2>
          <div className="tooltip-custom">
            <span className="tooltiptext-custom">Formulário para adicionar novos sensores</span>
            <img src={info} alt="Adicionar" className="add-icon" />
          </div>
        </div>
        <div>
          <form onsubmit="">
            <label for="height">Altura *</label>
            <input id="height" type="number" placeholder="Digite a altura do sensor" required />
            <label for="width">Largura *</label>
            <input id="width" type="number" placeholder="Digite a largura do sensor" required />
            <label for="length">Comprimento *</label>
            <input id="length" type="number" placeholder="Digite a comprimento do sensor" required />
            <label for="voltage">Tensão *</label>
            <input id="voltage" type="number" placeholder="Digite a tensão do sensor" required />
            <label for="brand">Marca *</label>
            <input id="brand" type="text" placeholder="Digite a marca do sensor" required />
            <label for="type">Tipo *</label>
            <select id="type">
              <option value="" selected disabled>Escolha um tipo</option>
              <option value="temperatura">temperatura</option>
              <option value="correnteEletrica">Corrente Elétrica</option>
              <option value="pressao">Pressão</option>
              <option value="intensidadeLuminosa">Intensidade Luminosa</option>
              <option value="aceleracao">Aceleração</option>
            </select>
            <div>
              <button type="submit" className="btn-save btn">Salvar</button>
              <button type="reset" className="btn-cancel btn">Cancelar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
