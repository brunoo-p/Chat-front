import React, { useEffect, useRef } from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function ChatWindow({chat, myUser}) {
    
    const messageElement = useRef(null);
    const [historic, setHistorc] = useState([]);

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
    
    useEffect(() => {
    
        let current = [];
        current.push(conversa);
        setHistorc(current);
    
    }, [conversa]);
    
    const conversa = chat.map(msg =>
        <Message key={Date.now() * Math.random()}
        user={msg.user}
        message={msg.message}
        myUser={myUser}/>
    );
    

        
    return (
        <Container ref={messageElement}>
            {historic}        
        </Container>
    )
}
