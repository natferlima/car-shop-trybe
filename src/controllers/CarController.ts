import { Request, Response } from 'express';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';

export default class CarController {
  public service; 
  
  constructor() {
    this.service = new CarService();
  }

  read = async (
    _req: Request, 
    res: Response<Car[]>,
  ): Promise<typeof res> => {
    const result = await this.service.read();
    return res.status(200).json(result);
  };
}