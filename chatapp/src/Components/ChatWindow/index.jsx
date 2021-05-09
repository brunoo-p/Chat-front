import React from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function ChatWindow({chat, myUser}) {
    
    const conversa = chat.map(msg =>
        <Message key={Date.now() * Math.random()}
        user={msg.user}
        message={msg.message}
        myUser={myUser}/>
    );

        
    return (
        <Container>
            {conversa}        
        </Container>
    )
}
