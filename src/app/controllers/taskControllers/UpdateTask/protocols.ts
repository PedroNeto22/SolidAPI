export interface UpdateTaskParams {
  title: string;
  body: string;
  status: string;
  priority: string;
  userId: string;
}

export interface IUpdateTaskUseCase {
  execute(updateTaskParams: UpdateTaskParams): Promise<void>;
}
