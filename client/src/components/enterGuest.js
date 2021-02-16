import { useState } from 'react';

export default function EnterGuest({ onAddGuest, sendGuestToServer }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(true);

  let newGuest = {
    firstName,
    lastName,
    isAttending,
  };

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
      <button
        onClick={() => {
          onAddGuest(newGuest);
          sendGuestToServer();
        }}
      >
        Submit
      </button>
    </div>
  );
}
