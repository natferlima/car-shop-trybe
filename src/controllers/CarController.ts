import { Request, Response } from 'express';
import CarService from '../services/CarService';
import { Car, CarSchema } from '../interfaces/CarInterface';

export default class CarController {
  public service; 
  
  constructor() {
    this.service = new CarService();
  }

  create = async (
    req: Request, 
    res: Response,
  ): Promise<typeof res | undefined> => {
    const validation = CarSchema.safeParse(req.body);
    if (validation.success) {
      const result = await this.service.create(req.body);
      return res.status(201).json(result);
    } 
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
  };

  read = async (
    _req: Request, 
    res: Response<Car[]>,
  ): Promise<typeof res> => {
    const result = await this.service.read();
    return res.status(200).json(result);
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<typeof res> => {
    const { id } = req.params;
    const result = await this.service.readOne(id);
    return res.status(200).json(result);
  };
}