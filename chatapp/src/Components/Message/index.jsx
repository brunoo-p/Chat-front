import React from 'react';
import { Container, Content, Text, Date } from './styles';

function Message({user, message, myUser}) {

    const d = new window.Date();
    let date = d.getHours() + ":" + d.getMinutes();
    let side = user === myUser ? 'flex-end' : 'flex-start';
    let bg = user === myUser && 'rgb(46, 213, 115, 0.8)';

    return (
        <Container style={{justifyContent: side}}>
            <Content style={{backgroundColor: bg}}>
            {/* <Text>{user}: </Text> */}
            <Text >{message}</Text>
            <Date>{date}</Date>
            </Content>
        </Container>
    )
}

export default Message;
