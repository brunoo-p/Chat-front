import React, { useRef, useState } from 'react';
import { Container, DotsSettings, SettingMenu, Content, UserImage, UserName } from './styles';
import avatarDefault from '../../Assets/avatar.png'

export default function UserDetails({setShowPortal, setChat}) {
    
    const [ showMenu, setShowMenu ] = useState(false);
    const [ contactName, setContactName ] = useState('Nome do Contato');
    const contactInput = useRef(null);
    
    const KEYBOARD_ENTERCODE = 13;

    const settingOptions = [ 
        "Salvar Contato",
        "Limpar Conversa",
        "Sair"
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu);   
    }

    const handleSaveContact = () => {
        contactInput.current.focus();
        setShowMenu(false);
    }
    const handleClearChat = () => {
        setChat([]);
        setShowMenu(false);
    }

    const handleName = (event) => {
        
        if(event.keyCode === KEYBOARD_ENTERCODE){
            setContactName(event.target.value);
            contactInput.current.value = "";
            contactInput.current.blur();
        }
    }

    const exitConversation = () => {
        handleClearChat();
        setTimeout(() => {
            setShowPortal(true);
        }, 500);
    }

    let className = showMenu ? 'open' : '';
    return (
        <Container>
            <input id="contactName" className="contactName" onKeyDown={handleName} ref={contactInput}/>
            <Content>
                <UserImage src={avatarDefault}/>
                <UserName>{contactName}</UserName>

                <DotsSettings onClick={handleMenu}/>
            
            </Content>
                <article>
                    <SettingMenu className={className} style={{height: settingOptions.length * 25}}>
                        <ul>
                            <li onClick={handleSaveContact}>Salvar Contato</li>
                            <li onClick={handleClearChat}>Limpar Conversa</li>
                            <li onClick={exitConversation}>Sair</li>
                        </ul>
                    </SettingMenu>
                </article>
        </Container>
    )
}
