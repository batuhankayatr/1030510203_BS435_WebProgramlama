import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const apiUrl = 'http://localhost:3000/login'; // Gerçek API adresinizi buraya ekleyin
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post(`${apiUrl}`, { email, password });

            const data = response.data;
            const user = response.data.user;

            if (data.success) {
                setLoggedIn(true);
                localStorage.setItem('user',user._id)
                console.log(localStorage.getItem('user'))
                navigate('/Home')
            } else  {
                alert('Hatalı kullanıcı adı veya şifre!');
            }
        } catch (error) {
            console.error('API hatası:', error);
            alert('Hatalı kullanıcı adı veya şifre!');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };
    const gotoregister = () => {
        window.location.href = "/Register";
    };

    return (
        <div className="Login">
            {loggedIn ? (
                <div>
                    <h2>Hoş geldiniz, {email}!</h2>
                    <button onClick={handleLogout}>Çıkış Yap</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <label>email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label>password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <div className="login_">
                    <button className='buttonlogin' onClick={handleLogin} style={{marginRight:"10px"}}>Giriş Yap</button>
                    <button className='buttonlogin' onClick={gotoregister} style={{background:"blue"}}>Kaydol</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
