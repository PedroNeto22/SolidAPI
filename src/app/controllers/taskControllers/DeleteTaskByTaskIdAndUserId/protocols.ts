export interface DeleteTaskParams {
  userId: string;
  taskId: string;
}

export interface IDeleteTaskByTaskIdAndUserIdUseCase {
  execute(deleteTaskParams: DeleteTaskParams): Promise<void>;
}
