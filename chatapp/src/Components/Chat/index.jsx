import React, { useEffect, useRef, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { ChatInput, ChatWindow, Portal, Nickname, UserDetails } from '..';

import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';

import { Container, ToggleLight, ToggleDark, Wrapper, Content } from './styles';

//import api from '../../Services/api';

export default function Chat() {

    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState("Desconhecido");
    const [ _, setId ] = useState('');

    const [ theme, setTheme ] = useState('light');
    const [ showPortal, setShowPortal ] = useState(true);
    const myUser = user;

    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:5001/chat")
            .withAutomaticReconnect()
            .build();
            
            setConnection(newConnection);
        }, []);


        useEffect(() => {
             
            (async () => {

                if(connection) {
                    await connection.start();
                    console.log('Connected!');
                    
                    try{

                        connection.on('ReceivePrivateMessage', (message) => {

                            console.log("message", message);
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

            const d = new window.Date();
            let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
            let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();  
            
            let date = hours + ":" + minutes;
            
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
        
        const toggleTheme = () => {
            if (theme === 'light') {
              setTheme('dark');
            } else {
              setTheme('light');
            }
        }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            
            {showPortal ? 
                    
                <Portal>
                    <Nickname setUser={setUser} setId={setId} setShowPortal={setShowPortal}/>
                </Portal>

            :

                <Container>
                    <Wrapper>
                        
                        <React.Fragment className="toggle">{ theme === 'light' ? <ToggleLight onClick={toggleTheme}/> : <ToggleDark onClick={toggleTheme}/> } </React.Fragment>
                        
                        <UserDetails setShowPortal={setShowPortal} setChat={setChat}/>
                        
                        <Content>
                            <ChatWindow chat={chat} myUser={myUser}/>
                            <ChatInput sendMessage={sendMessage} />
                        </Content>
                    
                    </Wrapper>   
                </Container>
            }
        </ThemeProvider>
    )
}
