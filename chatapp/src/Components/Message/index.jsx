import React, { useEffect } from 'react';
import msg from '../../Assets/msg.mp3';

import { Container, Content, Text, Date } from './styles';

function Message({user, message, date, myUser}) {
    
    let side = user === myUser ? 'flex-end' : 'flex-start';
    let background = user === myUser && 'rgb(46, 213, 115, 0.8)';

    useEffect(() => {

        if(user !== myUser){

            let audio = document.querySelector("#audio");
            audio.play();
        }
    }, [message]);

    return (
        <Container style={{justifyContent: side}}>

            <Content style={{backgroundColor: background}}>
            
                <Text >{message}</Text>
                <Date>{date}</Date>
            
            </Content>

            <audio controls id="audio" src={msg}></audio>
        </Container>
    )
}

export default Message;
