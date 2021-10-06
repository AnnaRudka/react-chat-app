import React from 'react'
import { Link } from 'react-router-dom';
import { UserContainer, UserPhoto } from './styles';
import ALICE from "../assets/anna_photo1.jpg";

const User = (props) => {
  return(
      <UserContainer>
          <Link to='/login'>
              <UserPhoto>
            <img src={ALICE} alt="contactImage" />
              </UserPhoto>
          </Link>
    </UserContainer>
   )
}
  
export default User;