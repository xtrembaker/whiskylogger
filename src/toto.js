import React, {Component} from 'react';

const initialState = {
  whisky : {
      fetching : false,
      fetched : false
      whiskies: []
  }
}

const reducer = (state=initialState, action) => {
  case 'FETCH_WHISKIES_REQUEST':
    return {...state, fetching: true};
    break;
  case 'FETCH_WHISKIES_SUCCESS':
    return {...state, fetching: false, fetched:true, whiskies : action.payload};
    break;
}

var store = createStore(reducer);

function fetchWhiskiesDispatcher(){
  store.dispatch((dispatch) => {
    dispatch({type:'FETCH_WHISKIES_REQUEST'});
    setTimeout(function(){
      var payload = [
        {
          id : 1,
          name : 'toto'
        },
        {
          id : 2,
          name : 'titi'
        },
        {
          id : 3,
          name : 'tata'
        }
      ]
      dispatch({type:'FETCH_WHISKIES_SUCCESS', payload : payload});
    }, 5000);
  });
}

class App extends Component{
  componentDidMount(){

  }
}
