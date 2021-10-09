import styled from "styled-components";
import icon from "../assets/sendIcon.png";
import iconActive from "../assets/sendIcon-active.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactSection = styled.section`
  width: 35%;
  justify-content: flex-end;
  height: 100vh;
  overflowy: "scroll";
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  .contacts-header {
    background-color: #f3f2f2;
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
  }
  .contacts-list {
    background-color: #ffffff;
    padding: 15px;
  }
  h3 {
    color: #45d4f8;
    padding: 20px 5px;
    font-weight: 300;
  }
  .contact-item {
    font-size: 14px;
    padding: 12px 0;
    color: #777777;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: left;
    border-bottom: 1px solid #dbdbdb;
  }
  .contact_info {
    display: flex;
  }
  .contact_name {
    padding: 5px 10px;
  }
  .contact_message {
    color: #cacaca;
    max-height: 30px;
    overflow: hidden;
  }
  .contact_date {
    padding: 5px 0;
  }
  .link-active {
    color: red;
  }
`;

export const UserContainer = styled.div`
  padding: 5px 0;
`;

export const UserPhoto = styled.div`
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const ChatSection = styled.section`
  width: 65%;
  height: 100vh;
  .chats-header {
    display: flex;
    justify-content: flex-start;
    background-color: #f3f2f2;
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
  }
  h3 {
    padding: 10px 20px;
    font-weight: 300;
  }
  .chats-content {
    possition: relative;
    padding: 15px 0;
    min-height: calc(100% - 160px);
  }
  .new-message {
    padding: 0 15px;
    position: relative;
    max-width: 100%;
  }
  .sent-button {
    position: absolute;
    padding: 0 15px;
    top: 14px;
    right: 40px;
    height: 30px;
    z-index: 9999999;
    cursor: pointer;
    background: transparent;
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
  }
  .sent-button:active {
    background-image: url(${iconActive});
  }
`;

export const RegistrationContainer = styled.div`
  width: 430px;
  margin: 20px auto;
  background-color: #dbdbdb;
  color: #ffffff;
  padding: 50px;
`;

export const RegistrationForm = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  h3 {
    margin: 10px;
    text-align: center;
    font-weight: 300;
  }
`;

export const NameForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  padding: 10px 15px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  color: #777777;
  background: #ffffff;
  &:focus {
    border: 1px solid #45d4f8;
  }
`;

export const Message = styled.div`
  padding: 0 15px;
  font-size: 14px;
  .contact-message {
    text-align: left;
    display: flex;
  }
  .message_content {
    padding: 0 10px;
  }
  .message_text {
    padding: 10px 20px;
    border-radius: 20px;
  }
  .user-text {
    display: inline-block;
    color: #000000;
    background-color: #f3f2f2;
  }
  .contact-text {
    color: #ffffff;
    background: #657683;
  }
  .message_date {
    color: #777777;
    font-size: 12px;
    padding: 5px;
  }
  .user-message {
    text-align: right;
    padding: 0 10px;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 0 0 15px;
  font-size: 11px;
  color: #aaaaaa;
  line-height: 1.8em;
  cursor: pointer;
  text-align: left;
`;

export const Checkbox = styled.input`
  border: 1px solid red;
  margin-right: 10px;
`;
