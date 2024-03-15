import CreateTaskController from './controllers/taskControllers/CreateTask/CreateTaskController';
import CreateUserController from './controllers/userControllers/CreateUser/CreateUserController';
import GetUserByIdController from './controllers/userControllers/GetUserById/GetUserByIdController';
import MysqlCreateTaskRepository from './repositories/taskRepository/CreateTask/MysqlCreateTask';
import MysqlCreateUserRepository from './repositories/userRepository/CreateUser/MysqlCreateUser';
import MysqlGetUserById from './repositories/userRepository/GetUserById/MysqlGetUserById';
import CreateTaskUseCase from './useCase/taskUseCase/CreateTaskUseCase';
import CreateUserUseCase from './useCase/userUseCase/CreateUserUseCase';
import GetUserByIdUseCase from './useCase/userUseCase/GetUserByIdUseCase';

const mysqlCreateUserRepository = new MysqlCreateUserRepository();
const createUserUseCase = new CreateUserUseCase(mysqlCreateUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

const mysqlGetUserByIdRepository = new MysqlGetUserById();
const getUserByIdUseCase = new GetUserByIdUseCase(mysqlGetUserByIdRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

const mysqlCreateTaskRepository = new MysqlCreateTaskRepository();
const createTaskUseCase = new CreateTaskUseCase(
  mysqlCreateTaskRepository,
  mysqlGetUserByIdRepository,
);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createUserController, getUserByIdController, createTaskController };
