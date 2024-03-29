import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Authenticate from './Authenticate.jsx'

function App() {

  const [token, setToken] = useState(null)


  return (
    <>
      <Form setToken= {setToken} token={token}/>
      <Authenticate setToken= {setToken} token={token}/>
    </>
  )
}

export default App
