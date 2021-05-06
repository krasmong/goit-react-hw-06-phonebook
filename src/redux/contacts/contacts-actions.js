import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './contacts-types';

export const addContact = (itemsName, itemsNumber) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name: itemsName,
    number: itemsNumber,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
