// import CarRouter from './routes/CarRouter';
import { Router } from 'express';
import App from './app';
import CarController from './controllers/CarController';

const CarRouter = Router();
const carController = new CarController();

CarRouter
  .get('/cars', (req, res) => carController.read(req, res));

const server = new App();
server.addRouter(CarRouter);

export default server;
