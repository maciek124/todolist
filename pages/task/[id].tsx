import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TaskDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [task, setTask] = useState<{ text: string; description?: string } | null>(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!id) return;

    
    const taskId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const currentTask = savedTasks[taskId];
    if (currentTask) {
      setTask(currentTask);
      setDescription(currentTask.description || '');
    }
  }, [id]);

  const saveTaskDetails = () => {
    if (!task || !id) return;

    
    const taskId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    savedTasks[taskId] = { ...task, description };
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
    router.push('/');
  };

  if (!task) return <p>Ładowanie...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Szczegóły zadania</h1>
        <p className="mb-2 font-semibold">Nazwa zadania:</p>
        <p className="mb-4">{task.text}</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Dodaj szczegóły"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={saveTaskDetails}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Zapisz
        </button>
        <button
          onClick={() => router.push('/')}
          className="mt-2 text-blue-500 hover:underline block text-center"
        >
          Powrót
        </button>
      </div>
    </div>
  );
}
