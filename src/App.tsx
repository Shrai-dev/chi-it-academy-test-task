import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CarsTable from './components/CarsTable/CarsTable';
import { fetchCars } from './api/api';
import SearchBar from './components/SearchBar/SearchBar';
import { CarData } from './utils/types';

function App() {
  const [cars, setCars] = useState<CarData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getCarsList = async () => {
    const carsList = await fetchCars();
    setCars(carsList);
  };

  useEffect(() => {
    getCarsList();
  }, []);

  const getSearchValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target.value === '') {
      getCarsList();
    }
    let dataLowerCase = event.target.value.toLowerCase();
    console.log(dataLowerCase);
    setSearchQuery(dataLowerCase);
  };

  const handleSearch = (searchTerm: string): void => {
    const searchString = new RegExp(searchTerm, 'ig');
    const filteredList = cars.filter((item) => {
      if (searchTerm === '') {
        return item;
      }
      return (
        `${item.car_model_year}`.match(searchString) ||
        `${item.availability}`.match(searchString) ||
        item.car_model.match(searchString) ||
        item.car_color.match(searchString) ||
        item.car_vin.match(searchString) ||
        item.price.match(searchString) ||
        item.car.match(searchString)
      );
    });
    setCars(filteredList);
  };

  return (
    <>
      <header>
        <h1 className="title">Cars</h1>
      </header>
      <main className="main">
        <SearchBar
          doSearch={() => handleSearch(searchQuery)}
          handleInput={getSearchValue}
        />
        <div className="cars__table">
          <CarsTable cars={cars} />
        </div>
      </main>
    </>
  );
}

export default App;
