import React from 'react';
import Contacts from "./Contacts.jsx";
import Chats from "./Chats.jsx";
import { EmptyChat, Wrapper } from './styles';
import { Switch, Route } from "react-router-dom";

const Conversations = () => {
  return(
    <Wrapper>
      <Contacts />
      <Switch>
        <Route path="/:contactId">
          <Chats />
        </Route>
        <Route exact path="/">
          <EmptyChat>Please select conversation</EmptyChat>
        </Route>
      </Switch>
    </Wrapper>
   )
}

export default Conversations;
