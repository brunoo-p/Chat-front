import React, { useEffect, useRef, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { ChatInput, ChatWindow, Portal, Nickname, UserDetails } from '..';
import { Container, Wrapper, Content } from './styles';
//import api from '../../Services/api';

export default function Chat() {

    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState("Desconhecido");
    const [ _, setId ] = useState('');
    const [ showPortal, setShowPortal ] = useState(true);
    const myUser = user;

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
            
            const d = new window.Date();
            let date = d.getHours() + ":" + d.getMinutes();
            
            const chatMessage = {
                user,
                message,
                date
            };
            
    
            if (connection.connectionStarted) {
                try {

                    await connection.send('SendPrivateMessage', chatMessage);
                }
                catch(e) {
                    console.log(e);
                }
            }
            else {
                alert('Conexão não estabelecida.');
            }
        } 

    return (
        <Container>
            {showPortal ? 
                
                <Portal>
                    <Nickname setUser={setUser} setId={setId} setShowPortal={setShowPortal}/>
                </Portal>
                :
                <Wrapper>

                    <UserDetails setShowPortal={setShowPortal} setChat={setChat}/>
                    
                    <Content>
                        <ChatWindow chat={chat} myUser={myUser}/>
                        <ChatInput sendMessage={sendMessage} />
                    </Content>
                
                </Wrapper>   
            }
        </Container>
    )
}
