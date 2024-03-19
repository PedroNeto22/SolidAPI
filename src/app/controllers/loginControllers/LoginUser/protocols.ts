export interface LoginParams {
  email: string;
  password: string;
}

export interface ILoginUserUseCase {
  execute(loginParams: LoginParams): Promise<void>;
}
