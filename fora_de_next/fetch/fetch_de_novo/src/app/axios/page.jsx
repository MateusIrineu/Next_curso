import axios from "axios";

export default async function ExemploPage(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await res.data;

    return(
        <main>
            <h1>Lista de usuário</h1>
            <ul>
                {users.map((user) => (
                     <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </main>
    );
}