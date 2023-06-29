export interface CarData {
  availability: boolean;
  car: string;
  car_color: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  id: number;
  price: string;
}

export interface CarsTableProps {
  cars: CarData[];
  handleModalClick?: () => void;
}

export interface SearchBarProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  doSearch: () => void;
}
