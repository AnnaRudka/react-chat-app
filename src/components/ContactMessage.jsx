import { Message, UserPhoto } from './styles';

const ContactMessage = ({ date, time, text, contact }) => {
    return (
        <Message>
            <div className="contact-message">
                <div className="message_photo">
                    <UserPhoto>
                        <img src={contact.photo} alt="UserPhoto" />
                    </UserPhoto>
                </div>
                <div className="message_content">
                    <div className="message_text contact-text">{text}</div>
                    <div className="message_date">
                        <span>{date}, </span>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        </Message>
    );
};

export default ContactMessage;