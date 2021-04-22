import React from 'react';
import { Container, Content, User, Text, Date } from './styles';

function Message({user, message}) {

    const d = new window.Date();
    let date = d.getHours() + ":" + d.getMinutes();
    let side = user === 'bruno' ? 'flex-start' : 'flex-end';
    let bg = user !== 'bruno' && 'rgb(46, 213, 115, 0.8)';

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