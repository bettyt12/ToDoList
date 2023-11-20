// components/TaskList.tsx
import React from 'react';
import Task from './Task';
import { Task as TaskType } from '../Types/TaskTypes';

interface TaskListProps {
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
	category:string
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, completeTask, category }) => {
  const filteredTasks = category ? tasks.filter(task => task.category === category) : tasks;

	return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
