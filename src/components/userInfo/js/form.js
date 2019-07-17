import React from 'react';
import store from '../../../store';
import { addComments } from'../../../actions/actions';

import '../css/form.css';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      phone: '',
      text: '',
      titleValid: false,
      textValid: false,
      isFormValid: false,
    }
  }
  
  validateFields(name, value) {
    let { titleValid, textValid } = this.state;

    switch (name) {
      case 'title':
          titleValid = value.length > 4 && value.length < 81;
          break;
      case 'text':
          textValid = value.length > 0 && value.length < 129;
          break;
      default:
        break;
    }

    this.setState({
      textValid,
      titleValid,
    }, this.validateForm);
  };
  
  validateForm() {
    this.setState({isFormValid: this.state.titleValid && this.state.textValid});
  }

  handleUserInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }, 
      () => { this.validateFields(name, value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props;
    const { text, title, phone } = this.state;
    const comment = {
      text, title, phone,
    }

    fetch('http://0dkgg.mocklab.io/users', {
        method: 'POST',
        body: JSON.stringify(comment),
    })
      .then(res => res.json())
      .then((val) => {
        console.log(val);
      });
    
    store.dispatch(addComments(id,comment));

  }

  render() {
    const  { isFormValid } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-title">
          Add comment:
        </div>

        <div className="form-area">
          <label htmlFor="title">Title</label>
          <input type="text"
            name="title"
            maxLength="80"
            placeholder="Should between 4 and 81 characters"
            value={this.state.title}
            onChange={this.handleUserInput.bind(this)}
          />
        </div>

        <div className="form-area">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            pattern="8[0-9]{10}"
            placeholder="8xxxxxxxxxx"
            maxLength="11"
            className="form-control"
            value={this.state.phone}
            onChange={this.handleUserInput.bind(this)}
          />
        </div>

        <div className="form-area">
          <label htmlFor="text">Comment</label>
          <textarea
            name="text"
            value={this.state.text}
            maxLength="128"
            placeholder="Should be less than 129 characters"
            onChange={this.handleUserInput.bind(this)}
          >
          </textarea>
        </div>
          
        <button 
          type="submit"
          className="submit-button"
          disabled={!isFormValid} >
          Send
        </button>
      </form>
    );
  }
}

export default Form;