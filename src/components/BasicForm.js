import useInput2 from '../hooks/use-inputs-2';
const BasicForm = (props) => {

  const {
    inputValue: enteredName,
    inputIsValid: enteredNameIsValid,
    inputError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler
  } = useInput2((inputValue) => inputValue.trim() !== "");

  const {
    inputValue: enteredLastName,
    inputIsValid: enteredLastNameIsValid,
    inputError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetHandler: lastNameResetHandler
  } = useInput2((inputValue) => inputValue.trim() !== "");

  const {
    inputValue: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    inputError: EmailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput2((inputValue) => inputValue.includes('@'));
  
  let formIsValid = false;
  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  };

  //========================== Without Custom Hook ==================================
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredLastName, setEnteredLastName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");

  // const [nameTouched, setNameTouched] = useState(false);
  // const [lastNameTouched, setLastNameTouched] = useState(false);
  // const [emailTouched, setEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredLastNameIsValid = enteredLastName.trim() !== "";
  // const enteredEmailIsValid = enteredEmail.trim() !== "";

  //input change handlers
  // const nameChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };

  // const lastNameChangeHandler = (e) => {
  //   setEnteredLastName(e.target.value);
  // };

  // const emailChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  //blur handlers
  // const nameBlurHandler = () => {
  //   setNameTouched(true);
  // };

  // const lastNameBlurHandler = () => {
  //   setLastNameTouched(true);
  // };

  // const emailBlurHandler = () => {
  //   setEmailTouched(true);
  // };

  //reset 
  // const resetInputHandler = () => {
  //   setEnteredName("");
  //   setEnteredLastName("");
  //   setEnteredEmail("");
  //   setNameTouched(false);
  //   setLastNameTouched(false);
  //   setEmailTouched(false);
  // }
  //========================== Without Custom Hook ==================================

  //form submit
  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!formIsValid) {
      console.log("Form invalid can not submit");
      return;
    };
    // resetInputHandler(); //without custom hook
    nameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
    console.log("Input Values Reset");
  };

  //style classes for errors
  const nameInputInvalid = nameHasError;
  const lastNameInputInvalid = lastNameHasError;
  const emailInputInvalid = EmailHasError;

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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};;

export default BasicForm;
