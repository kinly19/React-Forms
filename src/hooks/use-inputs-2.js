import { useState } from 'react';

//========================= Notes =================================
// inputValidate(inputValue) - this function takes inputValue state value as an argument
//  we pass the whole function in as an argument for the custom hook to use
//=================================================================

const useInput2 = (validateInput) => {
  //states
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  //function takes inputValue state as an argument, we pass this whole function up as an argument for our custom hook
  const inputIsValid = validateInput(inputValue); //pointing to a function
  const inputError = !inputIsValid && inputTouched;

  // let inputIsValid = false;
  // if(inputValue.trim() !== ''){
  //   inputIsValid=true;
  // }
    
  // let inputError = false;
  // if(!inputIsValid && inputTouched ){
  //   inputError=true;
  // }

  //handlers 
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const resetHandler = () => {
    setInputValue('');
    setInputTouched(false);
  };

  return {inputValue, inputIsValid, inputError, inputChangeHandler, inputBlurHandler, resetHandler}
};

export default useInput2;