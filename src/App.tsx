import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CarsTable from './components/CarsTable/CarsTable';
import { fetchCars } from './api/api';
import SearchBar from './components/SearchBar/SearchBar';
import { CarData } from './utils/types';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal/Modal';
import AddCarForm from './components/CarForms/AddCarForm/AddCarForm';

function App() {
  const [cars, setCars] = useState<CarData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(40);
  const [modalActive, setModalActive] = useState(false);

  const getCarsList = async () => {
    if (localStorage.getItem('cars')) {
      setCars(JSON.parse(localStorage.getItem('cars')!));
    } else {
      const carsList = await fetchCars();
      localStorage.setItem('cars', JSON.stringify(carsList));
      setCars(carsList);
    }
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
    setSearchQuery(dataLowerCase);
  };

  const handleCarsTableChanges = () => {
    setCars(JSON.parse(localStorage.getItem('cars')!));
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

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleModal = () => {
    setModalActive(true);
  };

  const addNewCar = (carData: CarData) => {
    setCars((prevCars) => [...prevCars, carData]);
    setModalActive(false);
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
        <div className="add__car-wrapper">
          <button className="add__car-btn" onClick={toggleModal}>
            Add new car
          </button>
        </div>
        <div className="cars__table">
          <CarsTable
            cars={currentCars}
            handleCarsTableChanges={handleCarsTableChanges}
          />
        </div>
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={cars.length}
          paginate={paginate}
        />
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <AddCarForm updateState={addNewCar} />
      </Modal>
    </>
  );
}

export default App;
