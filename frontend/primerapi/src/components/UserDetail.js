import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the user!", error);
            });
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Detail</h1>
            <p>{user.firstName} {user.lastName}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default UserDetail;
