import React, {Component} from "react"

export default class WhiskyItem extends React.Component {
  render() {
    const imgStyle = {
      height: 100,
      width: 100
    }
    return (
      <li><span>Image : <img src={this.props.src} style={imgStyle}/></span> - <span>Nom :{this.props.name}</span> - <span>Age :{this.props.age}</span> - <span>Alcool : {this.props.alcool}</span></li>
    );
  }
}
