import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [response, setResponse] = useState({});
  console.log('response', response);
  return (
    <div className="App">
      <button
        onClick={async (e) => {
          e.preventDefault();
          const response = await fetch(`http://127.0.0.1:8000/snippets/`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setResponse(response.body);
            });
        }}
      >
        GET
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: '',
              code: 'print("hello, world")\n',
              linenos: false,
              language: 'python',
              style: 'friendly',
            }),
          };
          const response = await fetch(
            `http://127.0.0.1:8000/snippets/`,
            requestOptions,
          )
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          console.log(response);
        }}
      >
        POST
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
          const response = await fetch(
            `http://127.0.0.1:8000/snippets/3`,
            requestOptions,
          )
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }}
      >
        DELETE
      </button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
