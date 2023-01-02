import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../Admin/AdminLogin.css'

export const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const defaultUser = {
        username: "test1234",
        password: "123456"
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if (username === defaultUser.username) {
        if (password === defaultUser.password) {
            navigate('/adminLogin/adminMainPage')
        } else {
            alert('Wrong Password')
        }
        } else {
            alert('Please Check Your Username or Password')
        }
    };

    return (
    <div className='login'>
        <h1 className='header'>Admin Login</h1>
        <form onSubmit={handlesubmit}>
        <div className="usernameLabel">
            <label>Username</label><br/>
            <input
                type="text"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
            />
        </div>

        <div className="passwordLabel">
            <label>Password</label><br/>
            <input
                type="password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="input"
            />
        </div>

        <button className='button' type="submit">Log in</button>
        </form>
    </div>
    )
}
