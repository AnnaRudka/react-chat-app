import { NavLink } from "react-router-dom";
import { UserPhoto } from './styles';
import { selectMessages } from '../redux/messagesSlice';
import { useSelector } from 'react-redux';

const Contact = ({id, photo, firstName, lastName}) => {
    const messages = useSelector(selectMessages).find((el) => el.id === Number(id)).conversation;
    const lastmessage = (messages.length === 0) ? "" : messages[messages.length-1];

  return (
    <NavLink to={`/${id}`} activeClassName="selected">
              <div className="contact-item" >
                  <div className="contact_info">
                      <UserPhoto>
                        <img src={photo} alt="userPhoto" />
                        <div className="active-icon"><span>&#10004;</span></div>
                      </UserPhoto>
                      <div className="contact_name">
                          <span>{firstName}</span>
                          <span>{lastName}</span>
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