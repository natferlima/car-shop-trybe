import GenericService from './GenericService';
import CarDAO from '../models/CarDAO';
import { Car } from '../interfaces/CarInterface';

export default class CarService extends GenericService<Car> {
  constructor(dao = new CarDAO()) {
    super(dao);
  }
}