import express, { Application } from 'express';
import userRoutes from './app/routes/userRoutes';
import taskRoutes from './app/routes/taskRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/tasks', taskRoutes);
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new App().app;
