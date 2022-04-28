import { Model } from 'mongoose';

export default class GenericDAO<T> {
  public model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async read(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }

  public async create(obj: T): Promise<T> {
    const result = await this.model.create(obj);
    return result;
  }

  public async readOne(id: string): Promise<T | null> {
    const result = await this.model.findById(id);
    return result;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    const result = await this.model.findByIdAndUpdate(id, obj, { new: true });
    return result;
  }

  public async delete(id: string): Promise<T | null> {
    const result = await this.model.findByIdAndDelete(id);
    return result;
  }
}