// types/TaskTypes.ts
export interface Task {
  id: number;
  name: string;
  completed: boolean;
	category: string;
}

export interface TaskFormProps {
  addTask: (task: Task) => void;
}

export interface TaskProps {
  task: Task;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export enum TaskCategory {
  Work = "Work",
  Personal = "Personal",
  Health = "Health",
}