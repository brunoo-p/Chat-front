import React, { useEffect, useRef, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { ChatInput, ChatWindow, Portal, Nickname } from '..';
import { Container, Wrapper, Content, Contact } from './styles';
import api from '../../Services/api';

export default function Chat() {

    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState('Desconhecido');
    const [ id, setId ] = useState();
    const [ showPortal, setShowPortal ] = useState(false);
    
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://brpchat-back.herokuapp.com/chat")
            .withAutomaticReconnect()
            .build();
            
            setConnection(newConnection);
        }, []);


        useEffect(() => {
             
            (async () => {

                if (connection) {
                    await connection.start();
                    console.log('Connected!');
                    
                    try{
                        connection.on('ReceivePrivateMessage', (message) => {
                            console.log(message);
                            const updatedChat = [...latestChat.current];
                            updatedChat.push(message);
                            
                            
                            setChat(updatedChat);
                            
                        });


                    }catch(err)
                    {
                        console.log(err);
                    }
                }
            })()

        }, [connection]);

        const sendMessage = async (message) => {
            console.log(chat);
            const chatMessage = {
                user,
                message,
            };
            
    
            if (connection.connectionStarted) {
                try {

                    await connection.send('SendPrivateMessage', chatMessage);
                    //await api.post("/chat/message", JSON.stringify(chatMessage));
                }
                catch(e) {
                    console.log(e);
                }
            }
            else {
                alert('No connection to server yet.');
            }
        } 
        
    let contato = user === 'maisa' ? 'Bruno Lindão' : 'Nome contato';

    return (
        <Container>
            {showPortal ? 
                
                <Portal>
                    <Nickname setId={setId} setUser={setUser} setShowPortal={setShowPortal}/>
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
