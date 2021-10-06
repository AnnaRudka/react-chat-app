import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectMessages } from '../redux/messagesSlice';
import { ChatSection, UserPhoto, Input} from './styles';

function Chats() {
    const contacts = useSelector(selectContacts);
    const contact = contacts[0];
    const messages = useSelector(selectMessages);

    const [newMessage, setNewMessage] = useState("");
    const handleNewMessageAdded = (e) => {
    setNewMessage(e.target.value);
    };
    return (
        <ChatSection>
            <div className="chats-header">
                <UserPhoto>
                    <img src={contact.photo} alt="photo" />
                </UserPhoto>
                <h3>{contact.firstName} {contact.lastName}</h3>
            </div>
            <div className="chats-content">

            </div>
            <div>
                <Input
            onChange={handleNewMessageAdded}
            placeholder="Type your message ➤"
            type="text"
            id="newMessage"
            value={newMessage}
                ></Input>
            </div>
        </ChatSection>
    );
}

export default Chats;