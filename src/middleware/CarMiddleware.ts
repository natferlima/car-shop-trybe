import { Request, Response, NextFunction } from 'express';
import CarService from '../services/CarService';

export default class CarMiddleware {
  public service; 
  
  constructor() {
    this.service = new CarService();
  }

  validation = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<typeof res | undefined> => {
    const { id } = req.params;
    if (id.length < 24) {
      return res.status(400).json(
        { error: 'Id must have 24 hexadecimal characters' },
      );
    }
    const result = await this.service.readOne(id);
    if (!result) {
      return res.status(404).json({ error: 'Object not found' });
    }
    next();
  };
}