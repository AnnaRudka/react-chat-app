import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import Contact from "./Contact";
import User from "./User";
import { ContactSection, Input} from './styles';


function Contacts() {
    const contacts = useSelector(selectContacts);
    console.log(contacts);
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