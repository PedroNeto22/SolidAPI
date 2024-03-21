export interface DeleteTaskParams {
  userId: string;
  taskId: string;
}

export interface IDeleteTaskByUserIdUseCase {
  execute(deleteTaskParams: DeleteTaskParams): Promise<void>;
}
