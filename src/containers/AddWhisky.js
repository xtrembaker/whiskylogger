import React, {Component} from "react";
import WhiskyForm from './WhiskyForm.js';
import store from './store.js';
import Immutable from 'immutable';

export default class WhiskyForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for(var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    data['id'] = Math.random().toString();
    const action = {
      type: 'ADD_NEW_ITEM',
      data : data
    }
    console.log('before dispatch add new item');
    store.dispatch(action);
  }
  render() {
    return (
        <WhiskyForm></WhiskyForm>
    );
  }
}
