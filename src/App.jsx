import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [serverMessage, setMessage] = useState('')

  async function fetchHelloData() {
    const res = await fetch('http://localhost:3000/get-hello');
    const {message} = await res.json();
    setMessage(message);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className='server-message-card'>
        <span className='card-title'>The smartest response is: </span>

        <span>{serverMessage}</span>
      </div>

      <div className='buttons-wrapper'>
        <button className='ugly-btn' onClick={fetchHelloData}>
          get response
        </button>

        <button className='ugly-btn gray' onClick={() => setMessage('')}>
          clear
        </button>
      </div>

      <p className="read-the-docs">
        Click to most beautiful button to get server response
      </p>
    </>
  )
}

export default App
