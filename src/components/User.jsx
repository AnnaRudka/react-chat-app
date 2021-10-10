import React from 'react'
import { Link } from 'react-router-dom';
import { UserContainer, UserPhoto } from './styles';
import ANNA from "../assets/anna_photo1.jpg";

const User = (props) => {
  return(
      <UserContainer>
          <Link to='/login'>
              <UserPhoto>
          <img src={ANNA} alt="contactImage" />
          <div className="active-icon"><span>&#10004;</span></div>
              </UserPhoto>
          </Link>
    </UserContainer>
   )
}
  
export default User;