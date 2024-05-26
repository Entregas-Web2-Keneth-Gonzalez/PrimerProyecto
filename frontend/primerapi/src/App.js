import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserForm from "./components/UserForm";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">User List</Link></li>
                        <li><Link to="/add-user">Add User</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/users/:id" element={<UserDetail />} />
                    <Route path="/add-user" element={<UserForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
