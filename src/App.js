import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { Counter } from './components/Counter';
import TourDetails from './components/TourDetails';
import ReservationsForm from './components/ReservationsForm';
import Reservations from './components/Reservations';
import DeleteTours from './components/DeleteTours';
import './styling/TourDetails.css';
import './styling/main.css';
import './styling/deleteTours.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/TourDetails/:tourID" element={<TourDetails />} />
          <Route path="/ReservationsForm" element={<ReservationsForm />} />
          <Route path="/Reservations/:userID" element={<Reservations />} />
          <Route path="/DeleteTours" element={<DeleteTours />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
