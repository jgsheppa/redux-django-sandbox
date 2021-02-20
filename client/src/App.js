import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import EnterGuest from './components/enterGuest';
import GuestList from './components/guestList';
import {
  loadGuests,
  addGuestToServer,
  deleteGuest,
} from './redux/reducers/guestList';
import { addGuestToList, deleteGuestFromList } from './redux/actions';
import AttendingGuestsList from './components/attendingGuestsList';

function App({ store }) {
  const guests = useSelector((state) => state.guestList.guests);
  console.log('whole store', store);
  console.log('store', store.getState());
  const dispatch = useDispatch();

  const onAddGuest = (newGuest) => {
    dispatch(addGuestToList(newGuest));
    dispatch(addGuestToServer());
  };

  // Put closer to the source component
  const deleteGuestFromServer = (idNumber, guest) => {
    dispatch(deleteGuest(idNumber));
    dispatch(deleteGuestFromList(guest));
  };

  useEffect(() => {
    const onLoad = () => {
      dispatch(loadGuests());
    };

    onLoad();
  }, [dispatch]);
  return (
    <div>
      <EnterGuest onAddGuest={onAddGuest} />
      <GuestList
        guests={guests}
        deleteGuestFromServer={deleteGuestFromServer}
      />
      <AttendingGuestsList guests={guests} />
    </div>
  );
}

export default App;
