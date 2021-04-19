import React, { useEffect, useRef, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { ChatInput, ChatWindow, Portal, Nickname } from '..';
import { Container, Wrapper, Content, Contact } from './styles';
//import api from '../../Services/api';

export default function Chat() {

    const [connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState('Desconhecido');
    const [ showPortal, setShowPortal ] = useState(true);
    const latestChat = useRef(null);

    //const url = 'https://brpchat-back.herokuapp.com';
    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://brpchat-back.herokuapp.com/chat')
            .withAutomaticReconnect()
            .build();
            
            setConnection(newConnection);
        }, []);

        useEffect(() => {
         
            if(connection){
                connection.start()
                    .then(result => {
                        console.log("Connected");

                        connection.on('ReceiveMessage', message => {
                            const updatedChat = [...latestChat.current];
                            updatedChat.push(message);

                            setChat(updatedChat);
                });
            })
                    .catch(e => console.log("Failed: ", e));
            }
    }, [connection]);

    const sendMessage = async (message ) => {
        const chatMessage = {
            user,
            message
        };
    
        if(connection.connectionStarted){
            try{
                
                await connection.send('SendMessage', chatMessage);
                
            }catch(err)
            {
                console.warn("Failled Message", err);
            }
        }else{
            alert("Deu nao");
        }    
    }

    let contato = user === 'maisa' ? 'Bruno Lindão' : 'Nome contato';

    return (
        <Container>
            {showPortal ? 
                <Portal>
                    <Nickname setUser={setUser} setShowPortal={setShowPortal}/>
                </Portal>
                :
                <Wrapper>
                    <Contact>
                        <label htmlFor="user"> {contato} </label>
                    </Contact>
                    <Content>
                        <ChatWindow chat={chat}/>
                        <ChatInput sendMessage={sendMessage} />
                    </Content>
                </Wrapper>   
            }
        </Container>
    )
}
