import { useState } from 'react';

export default function EnterGuest() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(true);

  async function postGuest(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        attending: isAttending === 'Attending' ? true : false,
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
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <select onChange={(e) => setIsAttending(e.target.value)}>
        <option>Attending</option>
        <option>Not Attending</option>
      </select>
      <button onClick={(e) => postGuest(e)}>Submit</button>
    </div>
  );
}
