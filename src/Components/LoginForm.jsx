import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 
            'Project-ID': "0081bc1c-e91e-4ffb-bdf6-65bac4c374b7",
            'User-Name': username,
            'User-Secret': password
        };

        try {
            // username | password => chatengine -> give me messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // if that works out -> login
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload(); // Reloading since we have to render login or sign up form.
        } catch (error) {
            // else -> try with new username
            setError('Oops! Incorrect username or password. Please try again.')
        }

    }

    return (  
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat With Mario</h1>
                <form onSubmit={handleSubmit}>
                    <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" />
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}
 
export default LoginForm;