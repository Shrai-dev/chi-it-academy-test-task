const URL = 'https://myfakeapi.com/api/cars/';

export const fetchCars = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  console.log(data.cars);
  return data.cars;
};
