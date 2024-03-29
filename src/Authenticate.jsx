import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonResult = await response.json();
      const authMessage = jsonResult.message;
      setSuccessMessage(authMessage);
    } catch (error) {
      alert("Error at Authentication");
    }
  };


  return (
    <>
      <h2>Authenticate your Token:</h2>
      <button onClick={handleClick}>Submit Authentication</button>
      <>
      {successMessage ? (
        <>
        <h4>Authentication Status:</h4>
        <p>{successMessage}</p>
        </>
      ) : (
        null
      )}
      </>
    </>
  );
};

export default Authenticate;
