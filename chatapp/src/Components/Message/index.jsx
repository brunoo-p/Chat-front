import React from 'react';
import { Container, Content, Text, Date } from './styles';

function Message({user, message, date, myUser}) {
    
    let side = user === myUser ? 'flex-end' : 'flex-start';
    let background = user === myUser && 'rgb(46, 213, 115, 0.8)';

    return (
        <Container style={{justifyContent: side}}>
            <Content style={{backgroundColor: background}}>
            {/* <Text>{user}: </Text> */}
            <Text >{message}</Text>
            <Date>{date}</Date>
            </Content>
        </Container>
    )
}

export default Message;
