import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import EnterGuest from './components/enterGuest';
import GuestList from './components/guestList';
import { loadGuests } from './redux/reducers/guestList';

function App({ store }) {
  const guests = useSelector((state) => state.guestList.guests);

  const dispatch = useDispatch();
  const onLoad = () => {
    dispatch(loadGuests());
  };

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <div>
      <EnterGuest />
      <GuestList guests={guests} />
    </div>
  );
}

export default App;
