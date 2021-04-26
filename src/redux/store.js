import { createStore, combineReducers } from 'redux';
// import contactsReducer from './contacts/contacts-reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contact/add':
      return {
        contacts: [...state, payload],
      };

    case 'contact/delete':
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contact/changeFilter':
      return payload;

    default:
      return state;
  }
};

const store = createStore(contactsReducer);

// const rootReducer = combineReducers({ contacts: contactsReducer });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
