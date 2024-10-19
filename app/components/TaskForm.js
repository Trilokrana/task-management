'use client';
import { useState } from 'react';


export default function TaskForm({ setTaskList }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');

 

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.random(),
            title,
            description,
            priority,
            completed: false,
        };
        setTaskList(prev => [...prev, newTask]);

        setTitle('');
        setDescription('');
        setPriority('low');

    };

    return (
        <form onSubmit={addTask} className="mb-6">
            <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2 text-gray-600">Task Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    className="border p-2 rounded-md text-gray-600"
                    required
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2 text-gray-600">Task Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                    className="border p-2 rounded-md text-gray-600"
                    required
                    rows={4}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-lg font-semibold mb-2 text-gray-600">Priority</label>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border p-2 rounded-md text-gray-600"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-2 rounded-lg font-semibold hover:bg-blue-500"
            >
                Add Task
            </button>
        </form>
    );
}
