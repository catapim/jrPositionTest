import React from 'react';

export default class Pokemon extends React.Component {

  createPokemon(){
    console.log('create pokemon');
    $.ajax({
      url: '/pkmn_put',
      type: 'PUT',
      contentType: 'application/json',
      data: "name=John&location=Boston",
      success: function(data){
          console.log('se creo el pokemon');
      }
  });
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

      <button onClick={this.createPokemon}>crea pokemon</button>


      </div>);
  }
}