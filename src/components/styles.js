import styled from "styled-components";

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
  }
  .contact_date {
    padding: 5px 0;
  }
  .link-active {
    color: #45d4f8;
  }
`;

export const UserContainer = styled.div`
  padding: 5px 0;
`;

export const UserPhoto = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  img {
    width: 100%;
    border-radius: 50%;
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
`;

export const RegistrationContainer = styled.div`
  width: 430px;
  margin: 20px auto;
  background-color: #121212;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
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
  padding: 10px 5px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  color: #dbdbdb;
  background: #ffffff;
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
