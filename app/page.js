'use client';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'High priority task', priority: 'high', completed: false },
  { id: 2, title: 'Task 2', description: 'Medium priority task', priority: 'medium', completed: false },
  { id: 3, title: 'Task 3', description: 'Low priority task', priority: 'low', completed: false }
];

export default function Home() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Task Manager</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8">
        <TaskForm setTaskList={setTaskList} />
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}
