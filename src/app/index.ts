import LoginUserController from './controllers/loginControllers/LoginUser/LoginUserController';
import CreateTaskController from './controllers/taskControllers/CreateTask/CreateTaskController';
import GetTasksByUserIdController from './controllers/taskControllers/GetTasksByUserId/GetTasksByUserIdController';
import CreateUserController from './controllers/userControllers/CreateUser/CreateUserController';
import GetUserByIdController from './controllers/userControllers/GetUserById/GetUserByIdController';
import MysqlCreateTaskRepository from './repositories/taskRepository/CreateTask/MysqlCreateTask';
import MysqlGetTasksByUserId from './repositories/taskRepository/GetTaskByUserId/MysqlGetTasksByUserId';
import MysqlCreateUserRepository from './repositories/userRepository/CreateUser/MysqlCreateUser';
import MysqlGetUserByEmailRepository from './repositories/userRepository/GetUserByEmail/MysqlGetUserByEmail';
import MysqlGetUserByIdRepository from './repositories/userRepository/GetUserById/MysqlGetUserById';
import LoginUserUseCase from './useCase/loginUseCase/LoginUserUseCase';
import CreateTaskUseCase from './useCase/taskUseCase/CreateTaskUseCase';
import GetTaskByUserIdUseCase from './useCase/taskUseCase/GetTasksByUserIdUseCase';
import CreateUserUseCase from './useCase/userUseCase/CreateUserUseCase';
import GetUserByIdUseCase from './useCase/userUseCase/GetUserByIdUseCase';

const mysqlCreateUserRepository = new MysqlCreateUserRepository();
const createUserUseCase = new CreateUserUseCase(mysqlCreateUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

const mysqlGetUserByIdRepository = new MysqlGetUserByIdRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(mysqlGetUserByIdRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

const mysqlCreateTaskRepository = new MysqlCreateTaskRepository();
const createTaskUseCase = new CreateTaskUseCase(
  mysqlCreateTaskRepository,
  mysqlGetUserByIdRepository,
);
const createTaskController = new CreateTaskController(createTaskUseCase);

const mysqlGetTasksByUserId = new MysqlGetTasksByUserId();
const getTaskByUserIdUseCase = new GetTaskByUserIdUseCase(
  mysqlGetTasksByUserId,
  mysqlGetUserByIdRepository,
);
const getTasksByUserIdController = new GetTasksByUserIdController(
  getTaskByUserIdUseCase,
);

const getUserByEmailRepository = new MysqlGetUserByEmailRepository();
const loginUserUseCase = new LoginUserUseCase(getUserByEmailRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export {
  createUserController,
  getUserByIdController,
  createTaskController,
  getTasksByUserIdController,
  loginUserController,
};
