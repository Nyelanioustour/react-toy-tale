import React, { Component } from 'react';
import './App.css';
import toys from './resources/toys'
import ToyForm from './ToyForm'
import ToyContainer from './ToyContainer'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      toys: toys
    }

  }
  
  componentDidMount(){

    //GET request
    //.then of promise
    //use this.setState()
    
  }
  
  handleLike= (e)=>{
    let id  = e.target.dataset.id

    //get the item that has the likes 
    let currentToy = {}

    let currentToyArray = this.state.toys.map(toy => {
      
        if(toy.id=== parseInt(id))
          {
            toy.likes = toy.likes + 1 
            currentToy = toy
            return toy
          }
        else
          return toy

    })

    this.updateLikes(currentToy).then(this.setState({toys: currentToyArray})
    )

    //increase likes
      //of toy card with id X 

  }

  updateLikes(current){
    return fetch(`localhost/${current.id}`,{
      header:{
        'Content-Type': 'application-json'
      },
      method: 'PATCH',
      body:JSON.stringify({likes: current.likes})
      .then(res => res.json()/*error handling */ )


    })

  }
  

  render() {
    return (
      <div> 
      <div id ="toy-header">
        <ToyForm /> 
      </div>
        
        <ToyContainer handleLike = {this.handleLike} toys= {this.state.toys}/> 
      </div>
    );
  }
}

export default App;
