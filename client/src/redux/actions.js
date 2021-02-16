import {
  ADD_GUEST,
  DELETE_GUEST,
  UPDATE_GUEST,
  LOAD_GUESTS,
} from './actionTypes';

export const addGuestToList = (content) => ({
  type: ADD_GUEST,
  payload: {
    content,
  },
});

export const updateGuest = () => ({
  type: UPDATE_GUEST,
});

export const deleteGuestFromList = (id) => ({
  type: DELETE_GUEST,
  payload: { id },
});

export const setGuests = (guests) => ({
  type: LOAD_GUESTS,
  payload: guests,
});
