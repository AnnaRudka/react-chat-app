import { NavLink, Route } from "react-router-dom";
import { UserPhoto } from './styles';

const Contact = (contact) => {
    const handleClick = e => {
        e.preventDefault();
    };

  return (
    <div>
      <NavLink to={`/${contact.id}` } activeClassName="link-active">
              <div className="contact-item" onClick={handleClick} >
                  <div className="contact_info">
                      <UserPhoto>
                          <img src={contact.photo} alt="photo" />
                      </UserPhoto>
                      <div className="contact_name">
                          <span>{contact.firstName}</span>
                          <span>{contact.lastName}</span>
                          <div className="contact_message">
                              <span>Last message</span>
                          </div>
                      </div>
                  </div>
                  <div className="contact_date">
                      {contact.lastDate}
                  </div>
              </div>
          </NavLink>
               </div>
  );
};
export default Contact;