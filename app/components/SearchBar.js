'use client';
import { useState } from 'react';

export default function SearchBar({ taskList, setFilteredTasks }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredTasks(
      taskList.filter(task => 
        task.title.toLowerCase().includes(value) || 
        task.description.toLowerCase().includes(value)
      )
    );
  };

  return (
    <input 
      type="search" 
      value={query} 
      onChange={handleSearch} 
      placeholder="Search tasks..." 
      className='w-full p-3 rounded-lg text-black mb-4 border-2 border-gray-400'
    />
  );
}
