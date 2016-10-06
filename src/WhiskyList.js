import React, {Component} from "react";
import Datasource from './Datasource.js';
import WhiskyItem from './WhiskyItem.js';

function fetchWhiskiesDispatcher(store){
  console.log('fetchWhiskiesDispatcher');
  store.dispatch((dispatch) => {
    dispatch({type:'FETCH_WHISKIES_REQUEST'});
    var ds = new Datasource();
    ds.getWhiskies().then(function(data){
      dispatch({type:'FETCH_WHISKIES_SUCCESS', payload : data});
    });
  });
}

export default class WhiskyList extends Component {
  constructor(props) {
    super(props);
    // this.state = {value: 'Hello!'};
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  componentWillMount(){
    const {store} = this.context;
    fetchWhiskiesDispatcher(store);
  }

  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    console.log(this.context.store.getState().getIn(['whisky', 'whiskies']));
    if(this.context.store.getState().getIn(['whisky', 'whiskies']).length > 0){
      return (
        <ul>{this.context.store.getState().getIn(['whisky', 'whiskies']).map((whisky, i) => {
          return <WhiskyItem src={whisky.input_image} name={whisky.name} age={whisky.age} alcool={whisky.alcool} key={whisky.id}/>
        })}

        </ul>
      );
    }else{
      return (<ul></ul>);
    }
  }
}

WhiskyList.contextTypes = {
  store: React.PropTypes.object
}
