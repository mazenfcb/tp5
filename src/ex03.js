import React, { useState } from 'react'

export const AuthForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, username]);
    };

    const handleDelete = (index) => {
        const newUsers = users.filter((_, i) => i !== index)
        setUsers(newUsers)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
