import React from 'react';

import './Header.css';

export default function Header() {

  return (
    <header className="header">
      <h1>Gestão de Sensores</h1>
      <ul>
        <div>
          <li>Dashboard</li>
        </div>
        <div>
          <li>Sensores</li>
        </div>
      </ul>
    </header>
  );
}
