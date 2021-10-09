import React from 'react';
import Contacts from "./Contacts.jsx";
import Chats from "./Chats.jsx";
import { Wrapper } from './styles';
import { Switch, Route } from "react-router-dom";

const HomePage = () => {
  return(
      <Wrapper>
          <Contacts />
          <Switch>
              <Route path="/:contactId">
                <Chats />
              </Route>
          </Switch>
    </Wrapper>
   )
}
  
export default HomePage;
