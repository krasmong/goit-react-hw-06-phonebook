import React from 'react';
import { connect } from 'react-redux';

import s from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/contacts-actions';

const ContactList = ({ filtredContacts, onDeleteContact }) => {
  console.log(filtredContacts);
  return (
    <ul className={s.list}>
      {filtredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.text}> {name} : </span>
          <span className={s.text}> {number} </span>
          <button className={s.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const filterContactsByName = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter),
  );
};
// !!!!!!!!!!!!!!?
// const filtredContacts = (filter, contacts) => {
//   // const { contacts } = this.state;
//   const normalizedFilter = this.state.filter.toLowerCase();
//   const filtredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   return filtredContacts;
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContactsByName(items, filter),
});

const mapDispatchToProps = dispatch => {
  return { onDeleteContact: id => dispatch(deleteContact(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ================================= 4 hw =======================================
// ================================= 4 hw =======================================
// ================================= 4 hw =======================================

// import React from 'react';
// import s from './ContactList.module.css';

// // import s from '../ContactList/ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   // console.log(contacts);

//   return (
//     <>
//       <ul className={s.list}>
//         {contacts.map(({ id, name, number }) => (
//           <li className={s.item} key={id}>
//             <span className={s.text}> {name} : </span>
//             <span className={s.text}> {number} </span>

//             <button className={s.btn} onClick={() => onDeleteContact(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ContactList;
