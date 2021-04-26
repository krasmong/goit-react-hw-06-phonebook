import { v4 as uuidv4 } from 'uuid';

export const addContact = data => ({
  type: 'contact/add',
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = contactId => ({
  type: 'contact/delete',
  payload: contactId,
});

export const changeFilter = value => ({
  type: 'contact/changeFilter',
  payload: value,
});
