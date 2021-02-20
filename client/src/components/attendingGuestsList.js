export default function AttendingGuestsList({ guests }) {
  const attendingGuests = [];
  const getAttendingGuests = guests.forEach((element) => {
    if (element.attending) {
      attendingGuests.push(element);
    }
  });
  console.log('attending', attendingGuests);
  return (
    <div className="App">
      <h3>Attending Guests</h3>
      {guests ? (
        <ul>
          {attendingGuests.map((guest) => {
            return (
              <li className="list-row" key={guest.id}>
                <div className="list-row">
                  <div className="guest-info">
                    <p>
                      Name: {guest.firstName} {guest.lastName}
                    </p>
                    <div>Attending: {guest.attending ? 'True' : 'False'}</div>
                  </div>
                </div>
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
