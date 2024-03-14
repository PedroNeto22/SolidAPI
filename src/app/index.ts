import CreateUserController from './controllers/userControllers/CreateUser/CreateUserController';
import MysqlCreateUserRepository from './repositories/CreateUser/mysqlCreateUser';
import CreateUserUseCase from './useCase/userUseCase/CreateUserUseCase';

const mysqlCreateUserRepository = new MysqlCreateUserRepository();
const createUserUseCase = new CreateUserUseCase(mysqlCreateUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
