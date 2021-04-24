import React from 'react'
import { Container } from './styles';

export default function Nickname({setUser, setShowPortal}) {
    
    const handleNickname = (event) => {
        if(event.keyCode === 13){
            let user = (event.target.value).toLowerCase(); 
            setUser(user);
            setShowPortal(false);
        }
    }
    
    return (
        <Container>
            <label htmlFor="Nickname"> Entre com seu nome de usuário: </label>
            <input type="text" name="nickname" onKeyDown={handleNickname}/>

        </Container>
    )
}
