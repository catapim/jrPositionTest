import React from 'react';

export default class Pokemon extends React.Component {

  alerta(){
    console.log('alertas');
  }

  
  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <h1>crea un pokemon</h1>

      <form>
        <input type="text" name="pname" placeholder="nombre pkmn"></input>
        <input type="text" name="ptype" placeholder="tipo pkmn"></input>
        <input type="text" name="pnumber" placeholder="numero pkmn"></input>
      </form>

      <button onClick={this.alerta}>crea pokemon</button>


      </div>);
  }
}