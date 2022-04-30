import Sinon from "sinon";
import chai from 'chai';
import CarDAO from "../../../models/CarDAO";

const { expect } = chai;

const carDAO = new CarDAO();

describe('CarDAO', () => {
  const carMock = {
    _id: '626c8086ccfbca54a39ca220',
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    doorsQty: 2,
    seatsQty: 2,
  }

  const mockCars = [ carMock ];

  describe('#read', () => {
    before(() => {
      Sinon.stub(carDAO.model, 'find').resolves(mockCars as any[]);
    });

    after(() => {
      Sinon.restore();
    })

    it('retornar uma lista', async() => {

      const result = await carDAO.read();
      expect(result).to.be.eql(mockCars);
    });
  });

  describe('#readOne', () => {
    before(() => {
      Sinon.stub(carDAO.model, 'findById').resolves(carMock as any);
    });

    after(() => {
      Sinon.restore();
    })

    it('retornar um elemento', async() => {

      const result = await carDAO.readOne('626c8086ccfbca54a39ca220');
      expect(result).to.be.eql(carMock);
    });
  });

})