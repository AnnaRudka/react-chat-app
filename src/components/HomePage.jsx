import React from 'react';
import Contacts from "./Contacts.jsx";
import Chats from "./Chats.jsx";
import { Wrapper } from './styles';

const HomePage = () => {
  return(
      <Wrapper>
          <Contacts />
          <Chats />
    </Wrapper>
   )
}
  
export default HomePage;
