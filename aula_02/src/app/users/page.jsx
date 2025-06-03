'use client';

import { useEffect, useState } from "react";

export default function userClientPage() {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(setUsers);
    }, []);

    return(
        <div>

            <h1> Usuários (Client side) </h1>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong> {user.name} </strong> - {user.email} - {user.address.city} - {user.address.street}
                    </li>
                ))}
            </ul>

        </div>
    )
}