import { FC, SetStateAction, useState } from 'react';
import './DropDownList.css';
import Modal from '../Modal/Modal';
import DeleteCarForm from '../CarForms/DeleteCarForm/DeleteCarForm';
import { CarData, DropDownListProps } from '../../utils/types';
import EditCarForm from '../CarForms/UpdateCarForm/EditCarForm';

const DropDownList: FC<DropDownListProps> = ({
  id,
  handleCarsTableChanges,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose an action');
  const [modalActive, setModalActive] = useState(false);
  const carsList: CarData[] = JSON.parse(localStorage.getItem('cars')!);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SetStateAction<string>) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setModalActive(true);
  };

  const handleClick = (id: number, updatedCarData?: CarData) => {
    if (selectedOption === 'Edit') {
      const editIndex: number = carsList.findIndex((car) => car.id === id);
      const updatedCars = [
        ...carsList.slice(0, editIndex),
        updatedCarData,
        ...carsList.slice(editIndex + 1),
      ];
      localStorage.setItem('cars', JSON.stringify(updatedCars));
      handleCarsTableChanges();
    } else if (selectedOption === 'Delete') {
      const updatedCars = carsList.filter(
        (car: { id: number }) => car.id !== id
      );
      localStorage.setItem('cars', JSON.stringify(updatedCars));
      handleCarsTableChanges();
    }
    setModalActive(false);
  };

  const options = ['Edit', 'Delete'];

  return (
    <div className="dropdown__container">
      <div className="dropdown__header" onClick={toggleDropDown}>
        {'Choose an action'}
      </div>
      {isOpen && (
        <div className="dropdown__list-container">
          <ul className="dropdown__list">
            {options.map((option) => {
              return (
                <li
                  key={option}
                  className="dropdown__list-item"
                  onClick={onOptionClicked(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        {selectedOption === 'Edit' ? (
          <EditCarForm id={id} handleClick={handleClick} />
        ) : (
          <DeleteCarForm id={id} handleClick={handleClick} />
        )}
      </Modal>
    </div>
  );
};

export default DropDownList;
