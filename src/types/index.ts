export enum ToDoStatus {
  pending = "Pending",
  completed = "Completed",
}

export type ToDoRow = {
  id: number;
  todo: string;
  completed: boolean;
};