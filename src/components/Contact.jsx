import { NavLink } from "react-router-dom";
import { UserPhoto } from './styles';
import { selectMessages } from '../redux/messagesSlice';
import { useSelector } from 'react-redux';

const Contact = (contact) => {
    const messages = useSelector(selectMessages).find((el) => el.id === Number(contact.id)).conversation;
    const lastmessage = (messages.length === 0) ? "" : messages[messages.length-1];

  return (
    <NavLink to={`/${contact.id}`}>
              <div className="contact-item" >
                  <div className="contact_info">
                      <UserPhoto>
                          <img src={contact.photo} alt="userPhoto" />
                      </UserPhoto>
                      <div className="contact_name">
                          <span>{contact.firstName}</span>
                          <span>{contact.lastName}</span>
                          <div className="contact_message">
                              <span>{lastmessage.text}</span>
                          </div>
                      </div>
                  </div>
                  <div className="contact_date">
                  {lastmessage.date}
              </div>
          </div>
      </NavLink>
  );
};
export default Contact;