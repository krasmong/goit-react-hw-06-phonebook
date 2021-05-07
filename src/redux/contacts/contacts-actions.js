import { v4 as uuidv4 } from 'uuid';
import * as types from './contacts-types';

export const addContact = contact => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: contact.name,
    number: contact.number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = contactName => ({
  type: types.CHANGE_FILTER,
  payload: contactName,
});
