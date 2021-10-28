import { useState } from 'react';
//============================== Notes ==============================================

//Two main ways for fetching entered value
//  *1st - Listening to every keystroke and storing values in some state variable.
//    if you need the entered value after every keystroke, for example for instant validation,
//    or if you wanted to reset the entered input. Then using a state is better
//  *2nd - use a ref to fetch the input once the user is done typing in a value
//    if you are only interested in the users entered value once... when the form is submitted, a ref may be better
//    logging and updating the state value with every keystroke is abit overkill.

// preventDefault() - if the event does not get explicitly handled, its default action should not be taken as it normally would be.
// The trim() method - removes whitespace from both ends of a string
// The onblur event - occurs when an object loses focus
// combine enteredNameIsValid with enteredNameTouched for showing validation feedback
//===================================================================================

const SimpleInput = (props) => {
  
  //1st way storing entered values
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  //if we have an empty string and the input field was touched(enteredNameTouched=true)
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; 

  let formIsValid = false;
  
  if (enteredNameIsValid) {
   formIsValid=true;
  }

  //updates state on each keystroke
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  //handling onBlur event
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  //2nd way using ref ==================
  // const nameInputRef = useRef();
  //====================================

  const formSubmissionHandler = (event)=> {
    event.preventDefault();
    setEnteredNameTouched(true);

    //validation 
    if (!enteredNameIsValid) { 
      return; 
    }
   
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
    
    //using refs to store input values after input
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)

    //changing input value back to empty with ref
    //nameInputRef.current.value=''; Not ideal dont manipulate the dom
  };

  //using a const helper with a ternary operator to change styled classes 
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid" //if nameInputIsInvalid is true
    : "form-control";

  //or directly inside of our jsx
  //<div className={nameInputIsInvalid ? 'form-control invalid': 'form-control'}>

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}//2nd method
          type="text"
          id="name"
          onChange={nameInputChangeHandler}//1st method
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (<p className="error-text">Name Must Not Be Empty.</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
