'use client'; // quando utilizo hooks do next, utilizo o 'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function addTaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter(); // pesquisar sobre useState e useRouter

    //criação do método post
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/tasks', {
                title,
                description,
            });
            
            setTitle('');
            setDescription('');
            router.push('/tasks');
        } catch (error) {
            console.log('Erro ao adicionar tarefa: ', error);
            alert('Erro ao adicionar tarefa, servidor fora do ar.');
        }
    };

    return (
        <div>
            <h1>Adicionar Tarefa</h1>

            <form onSubmit = { handleSubmit }>
                <div>
                    <label htmlFor="title"> Título da Tarefa </label>
                    <input 
                    type="text" 
                    value={ title } 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Digite o título da tarefa" 
                    required 
                    minLength={ 8 }
                    />
                </div>
                <div>
                    <label htmlFor="description"> Descrição da Tarefa </label>
                    <input 
                    type="text" 
                    value={ description } 
                    onChange={e => setDescription(e.target.value)} placeholder="Digite a descrição da tarefa"
                    required
                    />
                </div>
                <button type="submit"> Adicionar </button>
            </form>
        </div>
    )
}