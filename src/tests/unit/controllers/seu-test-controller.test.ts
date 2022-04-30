import Sinon from "sinon";
import chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../../server';
import CarDAO from "../../../models/CarDAO";

chai.use(chaiHttp);
const { expect } = chai;

const app = server.getApp();
const carDAO = new CarDAO();

describe('CarController', () => {
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

      const response = await chai
      .request(app)
      .get('/cars');

      expect(response).to.have.status(200)
      expect(response.body).to.be.eql(mockCars);
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

      const response = await chai
      .request(app)
      .get('/cars/626c8086ccfbca54a39ca220');

      expect(response).to.have.status(200)
      expect(response.body).to.be.eql(carMock);
    });
  });

})