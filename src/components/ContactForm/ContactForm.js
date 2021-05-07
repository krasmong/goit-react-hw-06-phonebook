import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';

import s from '../ContactForm/ContactForm.module.css';

// !!!!!!!??????!!!!!!

class ContactForm extends Component {
  state = {
    contact: { name: '', number: '' },
  };

  static propTypes = {
    onSaveContacts: PropTypes.func,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  isGetContact = name => {
    name = name.toLowerCase();
    return this.props.state.contacts.items.find(
      e => e.name.toLowerCase() === name,
    );
  };

  reset = () => this.setState({ contact: { name: '', number: '' } });

  handleSubmit = e => {
    const { onSaveContacts } = this.state;
    const { contact } = this.state;
    e.preventDefault();
    this.isGetContact(contact.name)
      ? alert(`Contact ${contact.name} already exists.`)
      : onSaveContacts(contact);
    this.reset();
  };

  render() {
    return (
      <div className={s.container}>
        <form onSubmit={this.handleSubmit}>
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
        </form>
        {/* ContactForm */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  onSaveContacts: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

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
