// components/TaskForm.tsx
import React, { useState } from 'react';
import { TaskCategory, TaskFormProps } from '../Types/TaskTypes';
import { PlusCircle } from 'react-feather';

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({
        id: Math.floor(Math.random() * 10000),
        name: taskName,
        completed: false,
        category: category || 'Uncategorized', // Default category if none provided
      });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 rounded-md p-2 mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add new task..."
        className="border-0 focus:outline-none w-full"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as TaskCategory)}
        className="border-0 focus:outline-none w-1/3 ml-2"
      >
        <option value="">Select category</option>
        {Object.values(TaskCategory).map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2">
        <PlusCircle size={20} />
      </button>
    </form>
  );
};

export default TaskForm;
