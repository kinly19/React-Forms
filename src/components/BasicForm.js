import { useState } from 'react';
const BasicForm = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  let formIsValid = false;
  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //input change handlers
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  //blur handlers
  const nameBlurHandler = () => {
    setNameTouched(true);
  };

  const lastNameBlurHandler = () => {
    setLastNameTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  //reset 
  const resetInputHandler = () => {
    setEnteredName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setNameTouched(false);
    setLastNameTouched(false);
    setEmailTouched(false);
  }

  //form submit
  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      console.log("Form invalid can not submit");
      return;
    }

    resetInputHandler()
    console.log("reset");
  };

  //style classes for errors
  const nameInputInvalid = !enteredName && nameTouched;
  const lastNameInputInvalid = !enteredLastName && lastNameTouched;
  const emailInputInvalid = !enteredEmail && emailTouched;

  const nameInputClass = nameInputInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameInputInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputInvalid && (
            <p className="error-text">Please enter a name</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputInvalid && (
            <p className="error-text">Please enter lastname.</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};;

export default BasicForm;
