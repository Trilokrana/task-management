import { useState } from 'react';

const TaskList = ({ taskList, setTaskList }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editFormData, setEditFormData] = useState({ title: '', description: '', priority: 'low' });
    const [query, setQuery] = useState('');

    const toggleComplete = (id) => {
        setTaskList(taskList.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));
    };

    const sortByPriority = () => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        setTaskList([...taskList].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]));
    };

    const startEditing = (task) => {
        setEditingTaskId(task.id);
        setEditFormData({
            title: task.title,
            description: task.description,
            priority: task.priority,
        });
    };

    const saveEdit = (id) => {
        setTaskList(
            taskList.map(task => task.id === id ? { ...task, ...editFormData } : task)
        );
        setEditingTaskId(null);
    };

    const handleInputChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    };


    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
    };


    const filteredTasks = taskList.filter(task =>
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query) ||
        task.priority.toLowerCase().includes(query)
       
    );

return (
    <div>
        <div className="mb-4">
            <input
                type="search"
                value={query}
                onChange={handleSearch}
                placeholder="Search tasks..."
                className='w-full p-3 rounded-lg text-black mb-4 border-2 border-gray-400'
            />
        </div>
        <button
            onClick={sortByPriority}
            className="bg-green-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-green-500"
        >
            Sort by Priority
        </button>

        {filteredTasks.map((task) => (
            <div
                key={task.id}
                className={`p-4 text-black mb-4 rounded-md shadow-md ${task.completed ? 'bg-gray-300' : task.priority === 'high' ? 'bg-red-200' : task.priority === 'medium' ? 'bg-yellow-200' : 'bg-green-200'}`}
            >
                {editingTaskId === task.id ? (
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={editFormData.title}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md mb-2 w-full"
                            placeholder="Task Title"
                        />
                        <textarea
                            name="description"
                            value={editFormData.description}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md mb-2 w-full"
                            placeholder="Task Description"
                        />
                        <select
                            name="priority"
                            value={editFormData.priority}
                            onChange={handleInputChange}
                            className="border p-2 rounded-md mb-2 w-full"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                        <button
                            onClick={() => saveEdit(task.id)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-500"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingTaskId(null)}
                            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                   
                    <>
                        <h3 className="text-xl font-bold">{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <div className="mt-4">
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-500"
                            >
                                {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                            </button>
                            <button
                                onClick={() => startEditing(task)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-400"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>
);
}

export default TaskList;
