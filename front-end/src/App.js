import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import AddSensor from './Components/AddSensor/AddSensor';
import LastAdded from './Components/LastAdded/LastAdded';

function App() {
  return (
      <>
      <Header />
        <main className="custom-container">

          <AddSensor />
          <LastAdded />

        </main>
      </>
  );
}

export default App;
