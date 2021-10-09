import { Message} from './styles';

const UserMessage = ({ date, time, text}) => {
    return (
        <Message>
            <div className="user-message">
                <div className="message_text user-text">{text}</div>
                <div className="message_date">
                    <span>{date}, </span>
                    <span>{time}</span>
                </div>
            </div>
        </Message>
    );
};

export default UserMessage;