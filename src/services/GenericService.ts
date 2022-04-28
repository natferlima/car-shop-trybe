import GenericDAO from '../models/GenericDAO';

export default class GenericService<T> {
  constructor(public dao: GenericDAO<T>) { }

  public read(): Promise<T[]> {
    const result = this.dao.read();
    return result;
  }
}