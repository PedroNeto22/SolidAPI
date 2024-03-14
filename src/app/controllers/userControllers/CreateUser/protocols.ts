export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserUseCase {
  execute(params: CreateUserParams): Promise<void>;
}
