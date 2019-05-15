import React, { Component } from 'react';
import ToyContainer from './ToyContainer';
import Form from './Form';
import toys from './resources/toys'
import './App.css';

class App extends Component {


  constructor(){
    super()
    this.state={
      allToys: toys
    }
  }

  handleIncreaseLikes =(id)=>{
    const newToyArray = this.state.allToys.map(toy=> {
      if(toy.id === id){
          toy.likes++ 
          return toy}
       else 
        return toy
    })

    this.setState({
      allToys: newToyArray
  })
}

handleNewToy=(e)=>{
  e.preventDefault()
    const newToy ={
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0,
      id: 43
    }
    const newToyArray = [...this.state.allToys, newToy]

    this.setState({
      allToys: newToyArray
    })
}

  render() {
    return (
      <div>
      <div id='toy-header'>
           <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png
" alt="toy-header"/>
         </div>
        <Form handleNewToy={this.handleNewToy}/>
        
        <ToyContainer toyCollection = {this.state.allToys} handleIncreaseLikes ={this.handleIncreaseLikes}/>
        </div>
    );
  }
}

export default App;
