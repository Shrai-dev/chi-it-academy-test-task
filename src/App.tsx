import { useEffect, useState } from 'react';
import './App.css';
import CarsTable from './components/CarsTable/CarsTable';
import { fetchCars } from './api/api';
import { CarData } from './utils/types';

function App() {
  const [cars, setCars] = useState<CarData[]>([]);

  const getCarsList = async () => {
    const carsList = await fetchCars();
    setCars(carsList);
  };

  useEffect(() => {
    getCarsList();
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Cars</h1>
      </header>
      <main className="main">
        <div className="cars__table">
          <CarsTable cars={cars} />
        </div>
      </main>
    </>
  );
}

export default App;
