import CreateUserController from './controllers/userControllers/CreateUser/CreateUserController';
import GetUserByIdController from './controllers/userControllers/GetUserById/GetUserByIdController';
import MysqlCreateUserRepository from './repositories/userRepository/CreateUser/MysqlCreateUser';
import MysqlGetUserById from './repositories/userRepository/GetUserById/MysqlGetUserById';
import CreateUserUseCase from './useCase/userUseCase/CreateUserUseCase';
import GetUserByIdUseCase from './useCase/userUseCase/GetUserByIdUseCase';

const mysqlCreateUserRepository = new MysqlCreateUserRepository();
const createUserUseCase = new CreateUserUseCase(mysqlCreateUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

const getUserByIdRepository = new MysqlGetUserById();
const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { createUserController, getUserByIdController };
