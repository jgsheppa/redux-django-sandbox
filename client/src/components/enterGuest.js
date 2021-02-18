import { useState } from 'react';

export default function EnterGuest({ onAddGuest, sendGuestToServer }) {
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [isAttending, setIsAttending] = useState(true);

  let newGuest = {
    firstName,
    lastName,
    attending: isAttending,
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        value={firstName}
      ></input>
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
      ></input>
      <select
        onChange={(e) => {
          console.log('aaaaaaaa', e);
          e.target.value === 'Attending'
            ? setIsAttending(true)
            : setIsAttending(false);
        }}
      >
        <option>Attending</option>
        <option>Not Attending</option>
      </select>
      <button
        onClick={() => {
          onAddGuest(newGuest);
          setFirstName('');
          setLastName('');
        }}
      >
        Submit
      </button>
    </div>
  );
}
