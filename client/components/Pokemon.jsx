/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <p>hello {this.props.nombre}</p>
        

      </div>);
  }
}