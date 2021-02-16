import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import EnterGuest from './components/enterGuest';
import GuestList from './components/guestList';
import { loadGuests, addGuest } from './redux/reducers/guestList';
import { addGuestToList } from './redux/actions';

function App({ store }) {
  const guests = useSelector((state) => state.guestList.guests);
  console.log('store', store.getState());
  const dispatch = useDispatch();

  const onAddGuest = (newGuest) => {
    dispatch(addGuestToList(newGuest));
  };

  const sendGuestToServer = () => {
    dispatch(addGuest());
  };

  useEffect(() => {
    const onLoad = () => {
      dispatch(loadGuests());
    };

    onLoad();
  }, [dispatch]);
  return (
    <div>
      <EnterGuest
        onAddGuest={onAddGuest}
        sendGuestToServer={sendGuestToServer}
      />
      <GuestList guests={guests} />
    </div>
  );
}

export default App;
