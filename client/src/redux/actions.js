import {
  ADD_GUEST,
  DELETE_GUEST,
  UPDATE_GUEST,
  LOAD_GUESTS,
} from './actionTypes';

export const addGuestToList = (newGuest) => ({
  type: ADD_GUEST,
  payload: newGuest,
});

export const updateGuest = () => ({
  type: UPDATE_GUEST,
});

export const deleteGuestFromList = (guest) => ({
  type: DELETE_GUEST,
  payload: guest,
});

export const setGuests = (guests) => ({
  type: LOAD_GUESTS,
  payload: guests,
});
