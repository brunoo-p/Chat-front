import React, { useState } from 'react'
import { Form, WriteMessage } from './styles';

export default function ChatInput({sendMessage}) {

    const [message, setMessage ] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const isMessageProvided = message && message !== '';

        if(isMessageProvided )
        {
            sendMessage(message);
            setMessage("");
        }else{
            alert("Ta fazendo errado");
        }
    }

    const onMessageUpdate = ({target}) => {
        setMessage(target.value);
    };


    return (
        <Form onSubmit={onSubmit}> 

            <WriteMessage>
                <input type="text" name="message" className="inputMessage" placeholder="Digite a menssagem"value={message}onChange={onMessageUpdate}/>
                <input type="submit" value="Enviar" className="inputSubmit"/>
            </WriteMessage>
            
        </Form>
    )
}
