import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.app.use('/users', userRoutes);
  }

  middleware() {
    this.app.use(express.json());
  }
}
export default new App().app;
