import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users", user)
            .then(response => {
                console.log("User created!", response.data);
            })
            .catch(error => {
                console.error("There was an error creating the user!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={user.age} onChange={handleChange} />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
