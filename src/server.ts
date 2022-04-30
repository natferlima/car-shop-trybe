// import CarRouter from './routes/CarRouter';
import { Router } from 'express';
import App from './app';
import CarController from './controllers/CarController';
import CarMiddleware from './middleware/CarMiddleware';

const CarRouter = Router();
const carController = new CarController();
const carMiddleware = new CarMiddleware();

CarRouter
  .get(
    '/cars/:id', 
    carMiddleware.validation, 
    carController.readOne,
  )
  .get('/cars', carController.read)
  .post('/cars', carController.create);

const server = new App();
server.addRouter(CarRouter);

export default server;
