import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectMessages } from '../redux/messagesSlice';
import Contact from "./Contact";
import User from "./User";
import { ContactSection, Input} from './styles';


function Contacts() {
  const contacts = useSelector(selectContacts);
  const messages = useSelector(selectMessages);
  const lastMessages = messages.map((el) => (el.conversation.length === 0) ? null : el.conversation[el.conversation.length - 1]);
  const [items, setItems] = useState(contacts);
  const [search, setSearch] = useState("");
    
    const handleSearchChange = (e) => {
    setSearch(e.target.value);
    };
    
    useEffect(() => {
    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(search.toLowerCase())
      );
    });
    setItems(filteredContacts);
  }, [search]);

//   array.sort(function(a,b){
//   return new Date(b.date) - new Date(a.date);
// });
    return (
        <ContactSection>
            <div className="contacts-header">
                <User/>
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
                {items.map((contact) => (
                  <Contact {...contact} key={contact.id} />
                ))}
            </div>
        </ContactSection>
    );
}

export default Contacts;