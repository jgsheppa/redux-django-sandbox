import { connect } from 'react-redux';
import { useState } from 'react';
import './guestList.css';

function GuestList({ guests, deleteGuestFromServer }) {
  const [editGuest, setEditGuest] = useState(false);

  function handleEdit() {
    setEditGuest(!editGuest);
  }
  return (
    <div className="App">
      {guests ? (
        <ul>
          {guests.map((guest) => {
            return (
              <li className="list-row" key={guest.id}>
                {editGuest ? (
                  <div className="list-row">
                    <input value={guest.firstName}></input>
                    <input value={guest.lastName}></input>
                    <div>Attending: {guest.attending ? 'True' : 'False'}</div>
                    <div>
                      <button onClick={handleEdit}>Save</button>
                      <button
                        onClick={() => deleteGuestFromServer(guest.id, guest)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="list-row">
                    <div className="guest-info">
                      <p>
                        Name: {guest.firstName} {guest.lastName}
                      </p>
                      <div>Attending: {guest.attending ? 'True' : 'False'}</div>
                    </div>

                    <div>
                      <button onClick={() => handleEdit()}>Edit Guest</button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default connect(null, { GuestList })(GuestList);
