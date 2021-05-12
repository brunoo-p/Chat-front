import React, { useState } from 'react'
import { Form, WriteMessage, MicIcon, SendMessage } from './styles';

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
            alert("Digite algo.");
        }
    }

    const onMessageUpdate = ({target}) => {
        setMessage(target.value);

    };


    const handleSendAudio = () => {
        console.log("Mandar Audio");
    }
    
    
    return (
        <Form onSubmit={onSubmit}> 

            <WriteMessage>
                <input type="text" name="message" className="inputMessage" placeholder="Digite a menssagem"value={message}onChange={onMessageUpdate}/>
                 {message.length > 0 ? <SendMessage>Enviar</SendMessage> : <MicIcon onclick={ handleSendAudio }/>}
            </WriteMessage>
            
        </Form>
    )
}
