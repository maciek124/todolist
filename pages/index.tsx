import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Task {
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    if (savedTasks.length) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Lista zadań</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Dodaj nowe zadanie"
            className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600"
          >
            Dodaj
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
              >
                {task.text}
              </span>
              <div className="flex space-x-4">
                <Link href={`/task/${index}`}>
                  <span className="cursor-pointer text-green-600 hover:text-green-800">Info</span>
                </Link>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Usuń
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
