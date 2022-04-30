import GenericDAO from '../models/GenericDAO';

export default class GenericService<T> {
  constructor(public dao: GenericDAO<T>) { }

  public async read(): Promise<T[]> {
    const result = await this.dao.read();
    return result;
  }

  public async create(obj: T): Promise<T> {
    const result = await this.dao.create(obj);
    return result;
  }

  public async readOne(id: string): Promise<T | null> {
    const result = await this.dao.readOne(id);
    return result;
  }
}