import React, { useEffect } from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function ChatWindow({chat}) {
    
    const conversa = chat.map(msg =>
        <Message key={Date.now() * Math.random()}
        user={msg.user}
        message={msg.message}/>
    );

        
    return (
        <Container>
            {conversa}        
        </Container>
    )
}
