import React, { useState } from 'react';
import './App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            // API'yi çağırarak kimlik doğrulama yapılabilir.
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                setLoggedIn(true);
            } else {
                alert('Hatalı kullanıcı adı veya şifre!');
            }
        } catch (error) {
            console.error('API hatası:', error);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div className="Login">
            {loggedIn ? (
                <div>
                    <h2>Hoş geldiniz, {username}!</h2>
                    <button onClick={handleLogout}>Çıkış Yap</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <label>username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label>password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className='buttonlogin' onClick={handleLogin}>Giriş Yap</button>
                </div>
            )}
        </div>
    );
}

export default Login;
