import React, {Component} from 'react';
import NameInput from './NameInput.js';
import AgeInput from './AgeInput.js';
import AlcoolInput from './AlcoolInput.js';
import ImageInput from './ImageInput.js';
import Datasource from '../Datasource.js';

const saveWhiskyDispatcher = (store, dataToBeSaved) => {
  // console.log('saveWhiskyDispatcher');
  store.dispatch((dispatch) => {
    dispatch({type:'SAVE_WHISKIES_REQUEST'});
    var ds = new Datasource();
    ds.saveWhisky(dataToBeSaved).then(function(data){
      dispatch({type:'SAVE_WHISKIES_SUCCESS', payload: data});
    });
  });
}

class WhiskyForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    // const formData = new FormData(event.target);
    // console.log(formData);
    const data = {};
    data['name'] = document.getElementById('name').value;
    data['age'] = document.getElementById('age').value;
    data['alcool'] = document.getElementById('alcool').value;
    data['input_image'] = document.getElementById('input_image').files[0].value;

    data['id'] = Math.random().toString();
    console.log(data);
    const {store} = this.context;
    saveWhiskyDispatcher(store, data);
    // const action = {
    //   type: 'ADD_NEW_ITEM',
    //   data : data
    // }
    // this.context.store.dispatch(action);
  }

  // componentWillMount(){
  //
  // }

  render(){
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <NameInput />
        <AgeInput />
        <AlcoolInput />
        <ImageInput />
        <input type="submit" />
      </form>
    )
  }
}

WhiskyForm.contextTypes = {
  store : React.PropTypes.object
}

export default WhiskyForm;
