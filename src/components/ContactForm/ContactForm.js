import React from 'react';
import { connect } from 'react-redux';
// import contactAction from '../../redux/contacts/contacts-actions';

import s from '../ContactForm/ContactForm.module.css';

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.OnSaveContacts(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

function ContactForm() {
  return (
    <div className={s.container}>
      {/* <form onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form> */}
      ContactForm
    </div>
  );
}

const mapStateToProps = state => {
  return {
    a: 5,
    b: 10,
    c: 15,
    x: 20,
  };
};

// const mapStateToProps = store => {
//   console.log(store.contacts);
// };

// const mapDispatchToProps = {
//   getNewContact: contactAction.addContact,
// };

// const mapDispatchToProps = dispatch => ({
//   OnSaveContacts: (itemsName, itemsNumber) => {
//     dispatch(contactsAction.addContact(itemsName, itemsNumber));
//   },
// });

export default connect(mapStateToProps)(ContactForm);

// ================================= 4 hw =======================================

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from '../ContactForm/ContactForm.module.css';

// export default class ContactForm extends Component {
//   static defaultProps = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     contacts: PropTypes.array,
//     name: PropTypes.string,
//     number: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.OnSaveContacts(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <form onSubmit={this.handleSubmit}>
//           <label className={s.label}>
//             Name
//             <input
//               className={s.input}
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={s.label}>
//             Number
//             <input
//               className={s.input}
//               type="text"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className={s.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
