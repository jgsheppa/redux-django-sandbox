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
      return {
        ...state,
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
      console.log('LOAD GUESTS');
      console.log('payload', action.payload);
      return { ...state, guests: action.payload };
    }
    default:
      console.log('DEFAULT');
      return state;
  }
}

export const loadGuests = () => async (dispatch, getState) => {
  const guests = await fetch(`http://127.0.0.1:8000/snippets/`).then((res) =>
    res.json(),
  );

  dispatch(setGuests(guests));
};
