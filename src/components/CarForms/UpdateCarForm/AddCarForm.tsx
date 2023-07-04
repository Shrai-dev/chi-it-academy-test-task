import { useState, FC, FormEventHandler } from 'react';
import './AddCarForm.css';
import { CarData, AddCarFormProps } from '../../../utils/types';

const AddCarForm: FC<AddCarFormProps> = ({ updateState }) => {
  const [carFormData, setCarFormData] = useState<CarData>({
    availability: false,
    car: '',
    car_color: '',
    car_model: '',
    car_model_year: 0,
    car_vin: '',
    id: Date.now(),
    price: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    updateState(carFormData);
    setCarFormData({
      availability: false,
      car: '',
      car_color: '',
      car_model: '',
      car_model_year: 0,
      car_vin: '',
      id: Date.now(),
      price: '',
    });
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
              value={carFormData.car}
              onChange={(e) =>
                setCarFormData((prevData) => ({
                  ...prevData,
                  car: e.target.value,
                }))
              }
            />
          </label>
          <label className="form__data-label" htmlFor="car-model">
            Model:
            <input
              className="form__data-input"
              type="text"
              id="car-model"
              value={carFormData.car_model}
              onChange={(e) =>
                setCarFormData((prevData) => ({
                  ...prevData,
                  car_model: e.target.value,
                }))
              }
            />
          </label>
          <label className="form__data-label" htmlFor="car-vin">
            VIN:
            <input
              className="form__data-input"
              type="text"
              id="car-vin"
              value={carFormData.car_vin}
              onChange={(e) =>
                setCarFormData((prevData) => ({
                  ...prevData,
                  car_vin: e.target.value,
                }))
              }
            />
          </label>
          <label className="form__data-label" htmlFor="car-color">
            Color:
            <input
              className="form__data-input"
              type="text"
              id="car-color"
              value={carFormData.car_color}
              onChange={(e) =>
                setCarFormData((prevData) => ({
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
              value={carFormData.car_model_year}
              onChange={(e) =>
                setCarFormData((prevData) => ({
                  ...prevData,
                  car_model_year: +e.target.value,
                }))
              }
            />
          </label>
          <label className="form__data-label" htmlFor="price">
            Price:
            <input
              className="form__data-input"
              type="text"
              id="price"
              value={carFormData.price}
              onChange={(e) =>
                setCarFormData((prevData) => ({
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
              checked={carFormData.availability === true}
              onChange={() =>
                setCarFormData((prevData) => ({
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
              checked={carFormData.availability === false}
              onChange={() =>
                setCarFormData((prevData) => ({
                  ...prevData,
                  availability: false,
                }))
              }
            />
            <span className="form__data-span">No</span>
          </label>
          <button className="form__data-btn">Add new car</button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
