import mongoose from 'mongoose';

import { Car } from '../interfaces/CarInterface';
import GenericDAO from './GenericDAO';

const CarSchema = new mongoose.Schema<Car>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: Boolean,
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
});

export default class ProfileDAO extends GenericDAO<Car> {
  constructor(model = mongoose.model('Car', CarSchema)) {
    super(model);
  } 
}