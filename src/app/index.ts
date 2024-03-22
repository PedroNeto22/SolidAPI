import LoginUserController from './controllers/loginControllers/LoginUser/LoginUserController';
import CreateTaskController from './controllers/taskControllers/CreateTask/CreateTaskController';
import DeleteTaskByTaskIdAndUserIdController from './controllers/taskControllers/DeleteTaskByTaskIdAndUserId/DeleteTaskByTaskIdAndUserIdController';
import GetTasksByUserIdController from './controllers/taskControllers/GetTasksByUserId/GetTasksByUserIdController';
import CreateUserController from './controllers/userControllers/CreateUser/CreateUserController';
import GetUserByIdController from './controllers/userControllers/GetUserById/GetUserByIdController';
import MysqlCreateTaskRepository from './repositories/taskRepository/CreateTask/MysqlCreateTask';
import MysqlGetTasksByUserId from './repositories/taskRepository/GetTasksByUserId/MysqlGetTasksByUserId';
import MysqlCreateUserRepository from './repositories/userRepository/CreateUser/MysqlCreateUser';
import MysqlGetUserByEmailRepository from './repositories/userRepository/GetUserByEmail/MysqlGetUserByEmail';
import MysqlDeleteTaskByTaskIdAndUserIdRepository from './repositories/taskRepository/DeleteTaskByTaskIdAndUserId/MysqlDeleteTaskByTaskIdAndUserId';
import MysqlGetUserByIdRepository from './repositories/userRepository/GetUserById/MysqlGetUserById';
import LoginUserUseCase from './useCase/loginUseCase/LoginUserUseCase';
import CreateTaskUseCase from './useCase/taskUseCase/CreateTaskUseCase';
import DeleteTaskByTaskIdAndUserIdUseCase from './useCase/taskUseCase/DeleteTaskByTaskIdAndUserIdUseCase';
import GetTaskByUserIdUseCase from './useCase/taskUseCase/GetTasksByUserIdUseCase';
import CreateUserUseCase from './useCase/userUseCase/CreateUserUseCase';
import GetUserByIdUseCase from './useCase/userUseCase/GetUserByIdUseCase';
import MysqlGetTaskByTaskIdAndUserIdRepository from './repositories/taskRepository/GetTaskByTaskIdAndUserId/MysqlGetTaskByTaskIdAndUserId';
import UpdateTaskController from './controllers/taskControllers/UpdateTask/UpdateTaskController';
import UpdateTaskUseCase from './useCase/taskUseCase/UpdateTaskUseCase';
import MysqlUpdateTask from './repositories/taskRepository/UpdateTask/MysqlUpdateTask';

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

const mysqlGetTaskByTaskIdAndUserIdRepository =
  new MysqlGetTaskByTaskIdAndUserIdRepository();
const mysqlDeleteTaskByTaskIdAndUserId =
  new MysqlDeleteTaskByTaskIdAndUserIdRepository();
const deleteTaskByTaskIdAndUserIdUseCase =
  new DeleteTaskByTaskIdAndUserIdUseCase(
    mysqlGetUserByIdRepository,
    mysqlDeleteTaskByTaskIdAndUserId,
    mysqlGetTaskByTaskIdAndUserIdRepository,
  );
const deleteTaskByTaskIdAndUserIdController =
  new DeleteTaskByTaskIdAndUserIdController(deleteTaskByTaskIdAndUserIdUseCase);

const mysqlUpdateTaskRepository = new MysqlUpdateTask();
const updateTaskUseCase = new UpdateTaskUseCase(
  mysqlGetUserByIdRepository,
  mysqlGetTaskByTaskIdAndUserIdRepository,
  mysqlUpdateTaskRepository,
);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);
export {
  createUserController,
  getUserByIdController,
  createTaskController,
  getTasksByUserIdController,
  loginUserController,
  deleteTaskByTaskIdAndUserIdController,
  updateTaskController,
};
