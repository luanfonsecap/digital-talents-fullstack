import React, { useState } from 'react';

import './AddSensor.css';
import info from '../../assets/info.svg';
import api from '../../services/api';

export default function AddSensor() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [voltage, setVoltage] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    api.post('/sensor', {
      height,
      width,
      length,
      voltage,
      brand,
      type,
    }).then(res => {
      if (res.data.length !== 1) {
        alert('Sensor Cadastrado!');
      }
      setHeight('');
      setWidth('');
      setLength('');
      setVoltage('');
      setBrand('');
    })
      .catch(res => {
        console.log(res);
        alert('Não foi possível cadastrar o sensor!');
      });
  }

  function handleCancel() {
    setHeight('');
    setWidth('');
    setLength('');
    setVoltage('');
    setBrand('');
  }
  
  return (
    <>
      <section className="add-sensor card-custom">

        <div className="header-card">
          <h2>Adicionar Sensor</h2>
          <div className="tooltip-custom">
            <span className="tooltiptext-custom">Formulário para adicionar novos sensores</span>
            <img src={info} alt="Adicionar" className="add-icon" />
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="height">Altura *</label>
            <input value={height} id="height" type="number" placeholder="Digite a altura do sensor" required onChange={e => setHeight(e.target.value)} />
            <label htmlFor="width">Largura *</label>
            <input value={width} id="width" type="number" placeholder="Digite a largura do sensor" required onChange={e => setWidth(e.target.value)} />
            <label htmlFor="length">Comprimento *</label>
            <input value={length} id="length" type="number" placeholder="Digite a comprimento do sensor" required onChange={e => setLength(e.target.value)} />
            <label htmlFor="voltage">Tensão *</label>
            <input value={voltage} id="voltage" type="number" placeholder="Digite a tensão do sensor" required onChange={e => setVoltage(e.target.value)} />
            <label htmlFor="brand">Marca *</label>
            <input value={brand} id="brand" type="text" placeholder="Digite a marca do sensor" required onChange={e => setBrand(e.target.value)} />
            <label htmlFor="type">Tipo *</label>
            <select defaultValue="" onChange={e => setType(e.target.value)} id="type">
              <option value="" disabled>Escolha um tipo</option>
              <option value="temperatura">temperatura</option>
              <option value="correnteEletrica">Corrente Elétrica</option>
              <option value="pressao">Pressão</option>
              <option value="intensidadeLuminosa">Intensidade Luminosa</option>
              <option value="aceleracao">Aceleração</option>
            </select>
            <div>
              <button type="submit" className="btn-save btn">Salvar</button>
              <button type="reset" onClick={handleCancel} className="btn-cancel btn">Cancelar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
