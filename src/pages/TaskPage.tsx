import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { TaskCategory, Task as TaskType } from '../Types/TaskTypes';

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
	const [categories, setCategories] = useState<TaskType[]>(() => {
    const storedCategories = localStorage.getItem('category');
    return storedCategories ? JSON.parse(storedCategories) : [];
  });
	const [selectedCategory, setSelectedCategory] = useState<string>('');


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
		localStorage.setItem('category', JSON.stringify(categories));
		setCategories(categories)
  }, [tasks]);

  const addTask = (task: TaskType) => {
    setTasks([...tasks, task]);
		// setCategories([...categories, category])
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

	return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">To-Do List</h1>
        <TaskForm addTask={addTask} />
				<div className="flex justify-center mb-4">
          <button onClick={() => setSelectedCategory('')} className="mr-2 px-3 py-1 rounded bg-blue-500 text-white">All</button>
					 {Object.values(TaskCategory).map((category, index) => (
         <button key={index} onClick={() => setSelectedCategory(category)} className="mr-2 px-3 py-1 rounded bg-blue-500 text-white">{category}</button>
        ))}
        </div>
        <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} category={selectedCategory} />
      </div>
    </div>
  );
};

export default TaskPage;
