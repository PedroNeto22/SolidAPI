export interface LoginParams {
  email: string;
  password: string;
}

export type Token = string;
export interface ILoginUserUseCase {
  execute(loginParams: LoginParams): Promise<Token | null>;
}
