import { connect } from 'react-redux';

function GuestList({ guests }) {
  return (
    <div className="App">
      {guests ? (
        <ul>
          {guests.map((guest) => {
            return (
              <li key={guest.id}>
                <div>{guest.firstName}</div>
                <div>{guest.lastName}</div>
                <div>Attending: {guest.attending ? 'True' : 'False'}</div>
                {/* <button onClick={(e) => deleteItem(e, guest.id)}>X</button> */}
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
