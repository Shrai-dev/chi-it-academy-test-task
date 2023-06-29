import { FC } from 'react';
import './CarsTable.css';
import { CarsTableProps } from '../../utils/types';

const CarsTable: FC<CarsTableProps> = ({ cars }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-cell">Company</th>
          <th className="table-cell">Model</th>
          <th className="table-cell">VIN</th>
          <th className="table-cell">Color</th>
          <th className="table-cell">Year</th>
          <th className="table-cell">Price</th>
          <th className="table-cell">Availability</th>
          <th className="table-cell">Actions Columns</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => {
          return (
            <tr key={car.id}>
              <td className="table-cell">{car.car}</td>
              <td className="table-cell">{car.car_model}</td>
              <td className="table-cell">{car.car_vin}</td>
              <td className="table-cell">{car.car_color}</td>
              <td className="table-cell">{car.car_model_year}</td>
              <td className="table-cell">{car.price}</td>
              <td className="table-cell">
                {car.availability === true ? 'true' : 'false'}
              </td>
              <td className="table-cell">Edit / Delete</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CarsTable;
