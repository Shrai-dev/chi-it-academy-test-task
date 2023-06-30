import { FC, SetStateAction, useState } from 'react';
import './DropDownList.css';

const DropDownList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropDown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SetStateAction<string>) => () => {
    setSelectedOption(value);
    setIsOpen(false);
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
    </div>
  );
};

export default DropDownList;
