import { FC } from 'react';
import './DeleteCarForm.css';
import { DeleteCarFormProps } from '../../../utils/interfaces';

const DeleteCarForm: FC<DeleteCarFormProps> = ({ id, handleClick }) => {
  return (
    <div className="delete__form-wrapper">
      <h3 className="delete__form-title">
        Are you sure you want to delete this car?
      </h3>
      <div className="delete__form-btns">
        <button
          className="delete__form-btn yes"
          onClick={() => handleClick(id)}
        >
          Yes
        </button>
        <button className="delete__form-btn no" onClick={() => handleClick(id)}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteCarForm;
