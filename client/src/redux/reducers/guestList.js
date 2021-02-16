import {
  ADD_GUEST,
  DELETE_GUEST,
  UPDATE_GUEST,
  LOAD_GUESTS,
} from '../actionTypes';
import { setGuests } from '../actions';

const initialState = {
  guests: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST: {
      console.log('ADD_GUEST');
      console.log('payload', action.payload);
      return {
        ...state,
        guests: [...state.guests, action.payload],
        newGuest: action.payload,
      };
    }
    case UPDATE_GUEST: {
      return {
        ...state,
      };
    }
    case DELETE_GUEST: {
      return {
        ...state,
      };
    }
    case LOAD_GUESTS: {
      return { ...state, guests: action.payload };
    }
    default:
      console.log('DEFAULT');
      return state;
  }
}

export const addGuest = () => async (dispatch, getState) => {
  const guest = getState().guestList.newGuest;
  console.log('get state guest', guest);
  const requestOptions = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(guest),
  };
  const postNewGuest = await fetch(
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
  console.log('after fetch');
  return postNewGuest;
};

export const loadGuests = () => async (dispatch, getState) => {
  const guests = await fetch(`http://127.0.0.1:8000/snippets/`).then((res) =>
    res.json(),
  );

  dispatch(setGuests(guests));
};
