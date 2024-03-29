import { useState } from "react"

const Form = ({setToken, token}) => {
  const [usernameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        })
      })
      const json = await response.json();
      const jsonMessage = json.message;
      const jsonToken = json.token;
      const success = json.success
      setToken(jsonToken)

    } catch (error){
      setErrorMessage(error.message)
    }
  }

  const handleUsernameInput = (event) => {
    setUserNameInput(event.target.value);
  }

  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  }

  const backButton = () => {
    setErrorMessage(null)
  }

  console.log(usernameInput)
  console.log(passwordInput)
  
  return (
    <>
    {errorMessage ? (
      <>
        <p>Error:</p>
        <p>{errorMessage}</p>
        <button onClick={backButton}>Back</button>
      </>
      ) : (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <label type="text" name="username">User Name:</label>
      <input type="text" name="username" onChange={handleUsernameInput}/>
      <label name="password">Password:</label>
      <input type="password" name="password" onChange={handlePasswordInput}/>
      <input type="submit"/>
    </form>
    <h2>Your Token:</h2>
    <p>{token}</p>
    </>
  )}
  </>
  )
}

export default Form
