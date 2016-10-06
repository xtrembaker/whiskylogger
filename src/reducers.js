import Immutable from 'immutable';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Datasource from './Datasource.js';


// Actions :
// NEW_WHISKY => Go to edit page
// ADD_WHISKY => Form submit
// REMOVE_WHISKY => Remove whisky from collection
// DETAIL_WHISKY => Show whisky information

const initialState = Immutable.Map({
  'whisky' : Immutable.Map({
    'loading' : false,
    'fetched' : false,
    'whiskies' : Immutable.List()
  })
});


const ds = new Datasource();

/**
 * The reducer takes 2 parameters : the current state and the action (object).
 * It return the new state of the whole application
 *
 * @param state
 * @param action
 * @return new state
 */
const reducer = (state = initialState, action) => {
  // console.log('state', state.hasIn('whisky', 'whiskies'));
  // console.log('state', state.toObject());
  switch(action.type){
    // case 'INIT_APP':
    // return Immutable.Map({
    //     'whiskies' : Immutable.List()
    // });
    case 'FETCH_WHISKIES_REQUEST':
    console.log('FETCH_WHISKIES_REQUEST');
      var newState1 = state.updateIn(['whisky', 'loading'], val => true);
      return newState1.updateIn(['whisky', 'fetched'], val => false);
    case 'FETCH_WHISKIES_SUCCESS':
      console.log('FETCH_WHISKIES_SUCCESS');
      var newState1 = state.updateIn(['whisky', 'whiskies'], val => action.payload);
      var newState2 = newState1.updateIn(['whisky', 'loading'], val => false);
      return newState2.updateIn(['whisky', 'fetched'], val => true);
      // return state;
    case 'SAVE_WHISKIES_REQUEST' :
      console.log('SAVE_WHISKIES_REQUEST');
      return state.updateIn(['whisky', 'loading'], val => true);
    case 'SAVE_WHISKIES_SUCCESS':
      console.log('SAVE_WHISKIES_SUCCESS');
      var newState1 = state.updateIn(['whisky', 'loading'], val => false);
      return newState1.updateIn(['whisky', 'whiskies'], val => action.payload);
    case 'ADD_NEW_ITEM':
      ds.saveWhisky(action.data);
      console.log(state);
      var newList = state.get('whiskies').push(action.data);
      return state.set('whiskies', newList);
    case 'SUBMIT_FORM' :
      return state;
    default :
      return state;
  }
}

const middleware = applyMiddleware(thunk);
let store = createStore(reducer, middleware);

export {store};
