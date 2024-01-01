import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import '../styles/Register.css';
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const apiUrl = 'http://localhost:3000/Register'; // Gerçek API adresinizi buraya ekleyin
    const navigate = useNavigate();
    const handleRegister = async () => {

        try {
            const response = await axios.post(`${apiUrl}`, { email, password });

            if (response.data.success) {
                setIsRegistered(true);
                navigate('/Login')
            } else {
                alert('Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('API hatası:', error);
        }
    };

    return (
        <div className="Register">
            {isRegistered ? (
                <div>
                    <h2>Kayıt başarıyla tamamlandı!</h2>
                    <p>Hesabınıza giriş yapabilirsiniz.</p>
                </div>
            ) : (
                <div>
                    <h2>Kayıt Ol</h2>
                    <label>Kullanıcı Adı:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label>Şifre:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleRegister} style={{marginTop:"20px",background:"blue", width:"200px"}}>Kayıt Ol</button>
                </div>
            )}
        </div>
    );
}

export default Register;
