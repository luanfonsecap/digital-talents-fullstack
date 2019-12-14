import React from 'react';

import './Header.css';
import LinkWrapper from '../LinkWrapper';

export default function Header() {

  return (
    <header className="header">
      <h1>Gestão de Sensores</h1>
      <ul>
        <div>
          <li><LinkWrapper to="/">Dashboard</LinkWrapper></li>
        </div>
        <div>
          <li><LinkWrapper to="/sensors">Sensores</LinkWrapper></li>
        </div>
      </ul>
    </header>
  );
}
