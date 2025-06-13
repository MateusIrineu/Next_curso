'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTaskPage() {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading]= useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);

            try {
                const res = await fetch('http://localhost:3000/tasks');
                const data = await res.json();
                setTasks(data);
            } catch(error) {
                alert.show('Erro ao buscar tarefa')
            }
            setLoading(false);
        }
        fetchTasks();
    }, []);

    useEffect(() => {
        if (selectedTaskId) {
            const task = tasks.find(t => t.id === selectedTaskId);
            if (task) {
                setTitle(task.title)
                setDescription(task.description)
            } else {
                setTitle('');
                setDescription('');
            }
        }
    }, [selectedTaskId, tasks]); // pedir pra explicar

    async function handleSubmit(e) {
        e.preventDefault();
        if (!selectedTaskId) return;
        try {
            await fetch(`http://localhost:3000/tasks/${selectedTaskId}`, { // ver como ficaria em axios
                method: "PUT", // ver isso tb
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title, description})
            });
            alert('Tarefa atualizada com sucesso.')
            router.push('/tasks');
        } catch {
            alert('Erro ao atualizar tarefa');
        }
    }
    
    return(
        <div>
            <h1>Edição de tarefa</h1>

            {loading ? (
                <div className='bg-gray-200'>Carregando tarefas...</div>
            ) :
            <>
                <div>

                    <label htmlFor="">Selecione uma tarefa: </label>
                    
                    <select 
                    value={selectedTaskId}
                    onChange={e => setSelectedTaskId(e.target.value)}>

                    <option value="">Selecione...</option>

                    {tasks.map(task => (
                        <option 
                        key={task.id} 
                        value={task.id}>{task.title}</option> 
                    ))}

                    </select>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">
                            Título
                        </label>
                        <input 
                        type="text"  
                        value={title} 
                        id="title" 
                        placeholder='Título' 
                        onChange={e => setTitle (e.target.value)} 
                        disabled={!selectedTaskId}
                        />
                    </div>
                    <div>
                        <label htmlFor="">
                            Descrição
                        </label>
                        <textarea 
                        value={description} 
                        id="description" 
                        onChange={e => 
                        setDescription(e.target.value)} 
                        cols="30" 
                        rows="10" 
                        placeholder='Adicionar descrição' 
                        required>
                        </textarea>
                    </div>
                    <button 
                    type='submit'
                    disabled={!selectedTaskId}
                    className='bg-blue-900 text-white'
                    > Salvar Alterações
                    </button>
                </form>

            </>
            }
        </div>
    )
}
