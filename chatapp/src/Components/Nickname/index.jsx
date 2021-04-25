import React, { useState } from 'react';
import api from '../../Services/api';

import { Container, Form } from './styles';

export default function Nickname({setUser, setShowPortal}) {
    
    const [ login, setLogin ] = useState(false);
    const [name, setName ] = useState('');
    const [nickname, setNickname ] = useState('');
    const [password, setPassword ] = useState('');


    const handleNickName = (event) =>{
        setNickname((event.target.value).toLowerCase());
    }
    const handlePass = (event) =>{
        setPassword((event.target.value));
    }
    

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        const response = await api.post(`/user/login?nickname=${nickname}&password=${password}`);
        console.log(response);
        setLogin(false);
    }

    return (
        <Container>
            { login ?
            <>
                <Form onSubmit={handleSubmitLogin}>
                    <label htmlFor="Login"> Faça Login </label>

                    <input type="text" name="nickname" placeholder="Seu usuário" value={nickname} onChange={handleNickName}/>
                    <input type="text" name="password" placeholder="Senha" value={password} onChange={handlePass}/>
                    
                    <input type="submit" value="Entrar" className="btnSubmit" onSubmit={handleSubmitLogin}/>
                </Form>
                
                
                <p onClick={() => setLogin(false)}>Me Registrar</p>
            </>
                :
            <>
                <Form onSubmit={handleSubmitLogin}>

                    <label htmlFor="Register"> Registrar </label>
                    
                    <input type="name" name="registerName" placeholder="Seu Nome" value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="text" name="registerNickname" placeholder="Nome de usuário" value={nickname} onChange={(event) => setNickname(event.target.value)}/>
                    <input type="password" name="registerPass" placeholder="Senha de acesso" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    
                    <input type="submit" value="Registrar" className="btnSubmit" onSubmit={handleSubmitLogin}/>
                
                </Form>
                <p onClick={() => setLogin(true)}>Ir para Login</p>
            </>
            }
            
        </Container>
    )
}
