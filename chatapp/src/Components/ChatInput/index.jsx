import React, { useEffect, useState } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import EmojiPicker, { SKIN_TONE_MEDIUM_LIGHT } from 'emoji-picker-react';
import { Form, WriteMessage, EmojiArea, CloseEmojiPicker, OpenEmojiPick, MicIcon, RecordIcon, SendMessage } from './styles';


export default function ChatInput({sendMessage}) {


    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
    }

    const {
        startRecording,
        stopRecording,
        clearBlobUrl,
        mediaBlobUrl
    } = useReactMediaRecorder({ video: false });
    
    const [ message, setMessage ] = useState('');
    const [ listening, setListening ] = useState(false);
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

    const handleMic = (event) => {
        console.log(event.type);
        console.log(event);
        
        if(event.type === "mousedown"){
            console.log(event.type);
            setListening(true);
            startRecording();
        }

        // if(recognition !== null){

        //     recognition.onstart = () => {
        //         setListening(true);
        //     }
        //     recognition.onend = () => {
        //         setListening(false);
        //     }
        //     recognition.onresult = (event) => {
        //         setMessage( event.results[0][0].transcript );
        //     }

        //     recognition.start();
        // }else{
        //     console.log("nao deu");
        // }
    }

    const handleStop = () => {
        stopRecording();
        
        setListening(false);
        
        clearBlobUrl();
    }

    const onEmojiClick = (event, emojiObject ) => {
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
                <audio className="inputAudio" src={mediaBlobUrl} style={{width: listening ? '100%' : 0}} controls />

            <WriteMessage>
                <input type="text" name="message" className="inputMessage"
                    placeholder="Digite a menssagem" 
                    value={message}
                    onChange={onMessageUpdate}
                    style={{width: listening ? 0 : '100%', transform: listening && 'translateX(-150%)'}}
                />

                <label className="stopRecord" style={{display: !listening && 'none', width: !listening && 0}} onClick={handleStop}> X </label>

                {message.length > 0 ?
                    <SendMessage>Enviar</SendMessage>
                    :
                    <>
                    <MicIcon onMouseDown={ handleMic } style={{color: listening && '#60a3bc' }}/>
                    <RecordIcon style={{width: listening && 10}} />
                    </> 
                }
            </WriteMessage>
            
        </Form>
        </>
    )
}
