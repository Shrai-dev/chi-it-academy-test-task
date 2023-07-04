import { FC, FormEventHandler, useState } from 'react';
import './AddCarForm.css';
import { CarData, EditCarFormProps } from '../../../utils/types';

const EditCarForm: FC<EditCarFormProps> = ({ id, handleClick }) => {
  const carsList: CarData[] = JSON.parse(localStorage.getItem('cars')!);
  const carFormData: CarData = carsList.filter((car) => car.id === id)[0];

  const [updatedCarFormData, setUpdatedCarFormData] = useState<CarData>({
    availability: false,
    car: carFormData.car,
    car_color: '',
    car_model: carFormData.car_model,
    car_model_year: carFormData.car_model_year,
    car_vin: carFormData.car_vin,
    id: carFormData.id,
    price: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleClick(id, updatedCarFormData);
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__wrapper">
          <label className="form__data-label" htmlFor="car-company">
            Company:
            <input
              className="form__data-input"
              type="text"
              id="car-company"
              disabled
              value={carFormData.car}
            />
          </label>
          <label className="form__data-label" htmlFor="car-model">
            Model:
            <input
              className="form__data-input"
              type="text"
              id="car-model"
              disabled
              value={carFormData.car_model}
            />
          </label>
          <label className="form__data-label" htmlFor="car-vin">
            VIN:
            <input
              className="form__data-input"
              type="text"
              id="car-vin"
              disabled
              value={carFormData.car_vin}
            />
          </label>
          <label className="form__data-label" htmlFor="car-color">
            Color:
            <input
              className="form__data-input"
              type="text"
              id="car-color"
              value={updatedCarFormData.car_color}
              onChange={(e) =>
                setUpdatedCarFormData((prevData) => ({
                  ...prevData,
                  car_color: e.target.value,
                }))
              }
            />
          </label>
          <label className="form__data-label" htmlFor="car-year">
            Year:
            <input
              className="form__data-input"
              type="text"
              id="car-year"
              disabled
              value={carFormData.car_model_year}
            />
          </label>
          <label className="form__data-label" htmlFor="price">
            Price:
            <input
              className="form__data-input"
              type="text"
              id="price"
              value={updatedCarFormData.price}
              onChange={(e) =>
                setUpdatedCarFormData((prevData) => ({
                  ...prevData,
                  price: e.target.value,
                }))
              }
            />
          </label>
          <label
            className="form__data-label label-availability"
            htmlFor="availability"
          >
            Availability:
            <input
              className="form__data-radio"
              type="radio"
              name="availability"
              id="availability"
              value="Yes"
              checked={updatedCarFormData.availability === true}
              onChange={() =>
                setUpdatedCarFormData((prevData) => ({
                  ...prevData,
                  availability: true,
                }))
              }
            />
            <span className="form__data-span">Yes</span>
            <input
              className="form__data-radio"
              type="radio"
              name="availability"
              id="availability"
              value="No"
              checked={updatedCarFormData.availability === false}
              onChange={() =>
                setUpdatedCarFormData((prevData) => ({
                  ...prevData,
                  availability: false,
                }))
              }
            />
            <span className="form__data-span">No</span>
          </label>
          <button className="form__data-btn">Finish editing</button>
        </div>
      </form>
    </div>
  );
};

export default EditCarForm;
