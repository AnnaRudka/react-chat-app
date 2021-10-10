import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectMessages } from '../redux/messagesSlice';
import Contact from './Contact';
import User from './User';
import { ContactSection, Input } from './styles';

function Contacts() {
  const [search, setSearch] = useState('');

  const contacts = useSelector(selectContacts);
  const messages = useSelector(selectMessages);

  const sortedContacts = useMemo(
    () =>
      contacts
        .map(contact => {
          const contactMessages = messages.find(
            message => message.id === contact.id,
          ) || { conversation: [] };

          const lastContactMessage = contactMessages.conversation[
            contactMessages.conversation.length - 1
          ] || { timestamp: 0 };

          return {
            ...contact,
            ...lastContactMessage,
          };
        })
        .sort((a, b) => b.timestamp - a.timestamp),
    [messages, contacts],
  );

  const filteredContacts = useMemo(
    () =>
      sortedContacts.filter(({ firstName, lastName }) =>
        `${firstName}${lastName}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, sortedContacts],
  );

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  return (
    <ContactSection>
      <div className="contacts-header">
        <User />
        <Input
          onChange={handleSearchChange}
          placeholder="&#x1F50E; Search or start new chat"
          type="text"
          id="search"
          value={search}
        ></Input>
      </div>
      <div className="contacts-list">
        <h3>Chats</h3>
        {filteredContacts.map(contact => (
          <Contact {...contact} key={contact.id} />
        ))}
      </div>
    </ContactSection>
  );
}

export default Contacts;
