import React, { useEffect, useRef } from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function ChatWindow({chat, myUser}) {
    
    const messageElement = useRef(null);

    useEffect(() => {
        if (messageElement) {
            messageElement.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            setTimeout(() => {

                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            }, 300);
          });
        }
      }, []);
    
    
    const conversa = chat.map(msg =>
        <Message key={Date.now() * Math.random()}
        user={msg.user}
        message={msg.message}
        date={msg.date}
        myUser={myUser}/>
    );
    

        
    return (
        <Container ref={messageElement}>
            {conversa}        
        </Container>
    )
}
