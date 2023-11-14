import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        if(name === 'admin' && password === 'safeAdmin') {
            navigate("/home/" + name);
        }
        else if(name === 'camille' && password === 'cam') {
            navigate("/home/" + name);
        }
    }, [name, password, navigate]);

    return (
        <div>
            <h1>Connexion</h1>
            <label htmlFor="name">Pseudo</label>
            <input type="text" name='name' value={name} onChange={handleNameChange} />
            
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name='password' value={password} onChange={handlePasswordChange}/>
            
            <button onClick={handleSubmit}>Se connecter</button>
        </div>
    )
}