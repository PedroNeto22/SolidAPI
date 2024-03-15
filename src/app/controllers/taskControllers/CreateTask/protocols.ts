export interface CreateTaskParams {
  title: string;
  body: string;
  status: string;
  priority: string;
  userId: number | null;
}

export interface ICreateTaskUseCase {
  execute(params: CreateTaskParams): Promise<void>;
}
