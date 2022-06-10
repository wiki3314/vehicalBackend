import Car from '../../../models/cars';

const CarsService = {};

CarsService.fetchCategoryCars = async query => {
  const car = await Car.find(query);

  return car;
};

CarsService.fetchCar = async query => {
  const car = await Car.findOne(query);
  return car;
};

CarsService.createCar = async query => {
  const car = await Car.create(query);
  return car;
};

CarsService.editCar = async (condition, update) => {
  const car = await Car.findOneAndUpdate(condition, update, { new: true });
  return car;
};

CarsService.deleteCar = async condition => {
  const car = await Car.deleteOne(condition);
  return car;
};

export default CarsService;
