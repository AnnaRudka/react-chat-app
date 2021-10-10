import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectMessages, addMessages } from '../redux/messagesSlice';
import { ChatSection, UserPhoto, Input } from './styles';
import ContactMessage from './ContactMessage';
import UserMessage from './UserMessage';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function Chats() {
  const { contactId } = useParams();
  const dispatch = useDispatch();
  
  const contact = useSelector(selectContacts).find(
    el => el.id === Number(contactId),
  );
  const messages = useSelector(selectMessages).find(
    el => Number(el.id) === Number(contactId),
  ).conversation;

  const [newMessage, setNewMessage] = useState('');

  const handleNewMessage = e => {
    setNewMessage(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    const date = new Date();
    dispatch(
      addMessages({
        id: contactId,
        messageId: uuidv4(),
        contactid: 0,
        text: newMessage,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        timestamp: date.getTime(),
      }),
    );
    setNewMessage('');
    getAnswer();
  };
  const onKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleClick(e);
      }
    }
  const getAnswer = () => {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    axios
      .get(apiUrl)
      .then(resp => {
        const newJoke = resp.data.value;
        setTimeout(() => {
          const date = new Date();
          dispatch(
            addMessages({
              id: contactId,
              messageId: uuidv4(),
              contactid: contactId,
              text: newJoke,
              date: date.toLocaleDateString(),
              time: date.toLocaleTimeString(),
              timestamp: date.getTime(),
            }),
          );
        }, 10000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ChatSection>
      <div className="chats-header">
        <UserPhoto>
                  <img src={contact.photo} alt="userPhoto" />
                  <div className="active-icon"><span>&#10004;</span></div>
        </UserPhoto>
        <h3>
          {contact.firstName} {contact.lastName}
        </h3>
      </div>
      <div className="chats-content">
        {messages.map(message =>
          message.contactid === 0 ? (
            <UserMessage {...message} key={message.messageId} />
          ) : (
            <ContactMessage
              {...message}
              key={message.messageId}
              contact={contact}
            />
          ),
        )}
      </div>
      <div className="new-message">
        <Input
          onChange={handleNewMessage}
          placeholder="Type your message"
          type="text"
          id="newMessage"
          value={newMessage}
          onKeyDown={onKeyDown}
        ></Input>
        <button onClick={handleClick} className="sent-button"></button>
      </div>
    </ChatSection>
  );
}

export default Chats;
