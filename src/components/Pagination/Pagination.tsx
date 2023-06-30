import { PaginationProps } from '../../utils/types';
import './Pagination.css';

const Pagination = ({ carsPerPage, totalCars, paginate }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li
            className="pagination__item"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
