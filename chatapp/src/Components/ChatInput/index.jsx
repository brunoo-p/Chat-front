import React, { useState } from 'react';
import EmojiPicker, { SKIN_TONE_MEDIUM_LIGHT } from 'emoji-picker-react';
import { Form, WriteMessage, EmojiArea, CloseEmojiPicker, OpenEmojiPick, MicIcon, SendMessage } from './styles';


export default function ChatInput({sendMessage}) {


    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [message, setMessage ] = useState('');
    const [ linstening, setListening ] = useState(false);
    const [ sendEmoji, setSendEmoji ] = useState(false);

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

    const handleMic = (e) => {

        if(recognition !== null){

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = () => {
                setMessage( e.results[0][0].transcript );
            }

            recognition.start();
        }else{
            console.log("nao deu");
        }
    }

    const onEmojiClick = (event, emojiObject ) => {
        console.log(emojiObject.emoji);
        setMessage(message + emojiObject.emoji);
    }


    return (
        <>
        
        <EmojiArea style={{height: sendEmoji ? 500 : 0}}>
            {sendEmoji && <CloseEmojiPicker onClick={() => setSendEmoji(false)}/>}
            
            <EmojiPicker
                disableSearchBar
                skinTone={SKIN_TONE_MEDIUM_LIGHT}
                onEmojiClick={onEmojiClick}
                
            />
        </EmojiArea>

        <OpenEmojiPick onClick={() => setSendEmoji(!sendEmoji)}/>
        
        <Form onSubmit={onSubmit}> 

            <WriteMessage>
                <input type="text" name="message" className="inputMessage" placeholder="Digite a menssagem"value={message}onChange={onMessageUpdate}/>
                {message.length > 0 ? <SendMessage>Enviar</SendMessage> : <MicIcon onClick={ handleMic } style={{color: linstening && '#60a3bc' }}/>}
            </WriteMessage>
            
        </Form>
        </>
    )
}
