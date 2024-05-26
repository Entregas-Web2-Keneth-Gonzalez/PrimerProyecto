import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.firstName} {user.lastName} - {user.age} years old
                            <Link to={`/users/${user.id}`}>View Details</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default UserList;
