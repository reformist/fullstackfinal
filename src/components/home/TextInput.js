import React, { useState } from 'react';
import axios from 'axios';

const TextInput = () => {
  // State to store the value of the input
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const [response, setResponse] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/home', 
        {
            amount: inputValue,
        }
        )
        console.log('response from backend:', response.data);
        setResponse(response.data);
        setInputValue('');
    } catch (error){
        console.error('error sending data to backend')
    }


  }
  // response && checks to see if there is a response to render or not
  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <label htmlFor="textInput">Please enter payment for subscription ($4.99):</label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        onChange={handleInputChange}
      />
      <button type="submit" style = {{ marginTop: '8px', padding: '8px', border: '1px solid #ccc'}}>Submit</button>
    </form>
    
    {response && (
        <div>
        <p>{response.message.toString()}</p>
        </div>
    )}
    </div>
  );
};

export default TextInput;
