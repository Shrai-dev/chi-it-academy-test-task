import { FC, SetStateAction, useState } from 'react';
import './DropDownList.css';
import Modal from '../Modal/Modal';
import DeleteCarForm from '../CarForms/DeleteCarForm/DeleteCarForm';
import { DropDownListProps } from '../../utils/types';

const DropDownList: FC<DropDownListProps> = ({
  id,
  handleCarsTableChanges,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose an action');
  const [modalActive, setModalActive] = useState(false);
  const carsList = JSON.parse(localStorage.getItem('cars')!);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SetStateAction<string>) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setModalActive(true);
  };

  const handleClick = (id: number) => {
    if (selectedOption === 'Edit') {
      console.log('Edit');
    } else if (selectedOption === 'Delete') {
      const updatedCars = carsList.filter(
        (car: { id: number }) => car.id !== id
      );
      localStorage.setItem('cars', JSON.stringify(updatedCars));
      handleCarsTableChanges();
      setSelectedOption('Choose an action');
    }
    setModalActive(false);
  };

  const options = ['Edit', 'Delete'];

  return (
    <div className="dropdown__container">
      <div className="dropdown__header" onClick={toggleDropDown}>
        {selectedOption || 'Choose an action'}
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
          ''
        ) : (
          <DeleteCarForm id={id} handleClick={handleClick} />
        )}
      </Modal>
    </div>
  );
};

export default DropDownList;
