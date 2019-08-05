/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <p>Name: {this.props.name}</p>
       <p>Type: {this.props.type}</p>
       <p>Number: {this.props.number}</p>
       <p>Photo: </p><img src={this.props.img}/>
      </div>);
  }
}