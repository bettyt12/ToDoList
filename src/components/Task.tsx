// components/Task.tsx
import React from 'react';
import { TaskProps } from '../Types/TaskTypes';
import { CheckCircle, Trash2, X } from 'react-feather';

const Task: React.FC<TaskProps> = ({ task, deleteTask, completeTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

	return (
		<div className="flex flex-row items-center justify-between border-b border-gray-200 py-3">
			<div className="flex items-center w-full">
				<label className="flex items-center cursor-pointer w-full">
					<input
						type="checkbox"
						checked={task.completed}
						onChange={handleComplete}
						className="mr-3 cursor-pointer"
					/>
					<div className="flex-grow text-left ">
						<span
							style={{
								textDecoration: task.completed ? 'line-through' : 'none',
								color: task.completed ? '#888' : '#000',
							}}
						>
							{task.name}
						</span>
					</div>
				</label>
			</div>
			<div className="flex items-center">
				<Trash2 size={18} onClick={handleDelete} className="text-red-500 hover:text-red-700 mx-2 focus:outline-none" />
			</div>
		</div>
	);
};

export default Task;
