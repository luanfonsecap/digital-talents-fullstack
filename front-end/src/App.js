import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import AddSensor from './Components/AddSensor/AddSensor';

function App() {
  return (
      <>
      <Header />
        <main className="custom-container">

          <AddSensor />

        </main>
      </>
  );
}

export default App;
