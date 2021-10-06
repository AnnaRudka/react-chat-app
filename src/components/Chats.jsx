import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { ChatSection, UserPhoto} from './styles';

function Chats() {
    const contacts = useSelector(selectContacts);
    const contact = contacts[0];
    return (
        <ChatSection>
            <div className="chats-header">
                <UserPhoto>
                    <img src={contact.photo} alt="photo" />
                </UserPhoto>
                <h3>{contact.firstName} {contact.lastName}</h3>
            </div>
            <div></div>
        </ChatSection>
    );
}

export default Chats;