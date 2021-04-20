import { v1 as uuidv1 } from 'uuid';

export const addContact = (itemsName, itemsNumber) => ({
  type: 'ADD_CONT',
  payload: {
    id: uuidv1(),
    name: itemsName,
    number: itemsNumber,
  },
});
