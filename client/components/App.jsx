/*
    ./client/components/App.jsx
*/
import React from 'react';
import Pokemon from './Pokemon.jsx';
import CreatePokemon from './CreatePokemon.jsx';

const API = ('pokemon.json');
const DEFAULT_QUERY = ('read');

export default class App extends React.Component {
  constructor(props) {    
      super(props);
      this.state = {
        pokemonArray: []        
  };      
}

  componentDidMount(){
    console.log('hola welcome')
      fetch(API)
      .then(res => res.json())
      .then((data)=>{this.setState({pokemonArray: data})
          console.log(data)
      })
      .catch(console.log)
  }  
    render() {
      let pokemon_items = [];

for (let i = 0;i<this.state.pokemonArray.length; i++) {
  console.log(this.state.pokemonArray[i])
  //array de componentes
  pokemon_items.push(<Pokemon 
    name={this.state.pokemonArray[i].name} 
    type={this.state.pokemonArray[i].type}
    number={this.state.pokemonArray[i].number}
    img={this.state.pokemonArray[i].img}></Pokemon>)
  
}

      return (
      <div style={{textAlign: 'center'}}>
          <h1>Hello World</h1>
          
          <h1>Pokemones Indigo League</h1>
          
          {pokemon_items}

          <CreatePokemon></CreatePokemon>
          

        </div>);
    } 
} 