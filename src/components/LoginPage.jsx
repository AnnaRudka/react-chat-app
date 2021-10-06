import React, { useState, useEffect } from "react";
import {
  RegistrationForm,
  RegistrationContainer,
  Input,
  CheckboxContainer,
  Checkbox,
} from "./styles";

const LoginPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [rememberCheckbox, setRememberCheckbox] = useState(false);

  const inputItems = [
    {
      id: 1,
      value: email,
      name: "email",
      placeholder: "Email Adress *",
    },
    {
      id: 2,
      value: password,
      name: "password",
      placeholder: "Password *",
    },
  ];
  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        emailCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      case "password":
        setPassword(e.target.value);
        passwordCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const emailRegex = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    emailRegex.test(String(email).toLowerCase())
      ? setEmailCorrect(true)
      : setEmailCorrect(false);
  }, [email]);

  useEffect(() => {
    const passwordRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
    passwordRegex.test(String(password))
      ? setPasswordCorrect(true)
      : setPasswordCorrect(false);
  }, [password]);

  const onChangeCheckboxHandler = (e) => {
    setRememberCheckbox(e.target.checked);
    console.log(e.target.checked);
  };

  const onSignInButtonClick = () => {
    if (emailCorrect && passwordCorrect) {
      console.log("log in");
    } else console.log("reject");
  };

  return(
     <RegistrationContainer>
      <RegistrationForm>
        <h3>Sign in</h3>
        <div>
          {inputItems.map((item) => (
            <Input
              key={item.id}
              onChange={onChangeHandler}
              type={item.name}
              value={item.value}
              name={item.name}
              placeholder={item.placeholder}
            ></Input>
          ))}
        </div>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={rememberCheckbox}
            onChange={onChangeCheckboxHandler}
          />
          Remember me
        </CheckboxContainer>
              <button onClick={onSignInButtonClick}>Sign in</button>
              {/* <AdditionalQuestions>
          <p>Forgot password?</p>
          <Link to="/signup">
            <p>Don't have account? Sign Up</p>
          </Link>
        </AdditionalQuestions> */}
          </RegistrationForm>
          {/* <Route path="/signup">
        <SignUpForm />
      </Route> */}
    </RegistrationContainer>
   )
}
  
export default LoginPage;
