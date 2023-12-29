import React, { useState } from 'react';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const apiUrl = 'https://example.com/api'; // Gerçek API adresinizi buraya ekleyin

    const handleRegister = async () => {
        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                setIsRegistered(true);
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label>Şifre:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleRegister}>Kayıt Ol</button>
                </div>
            )}
        </div>
    );
}

export default Register;
