import React from 'react';
import ToyCard from './ToyCard';

class ToyContainer extends React.Component{
    
    render(){
        return(
        <div id="toy-collection">
             { this.props.toys.map((toy, index) => <ToyCard handleLike = {this.props.handleLike} key={toy.id} toy={toy}/>) }
      </div>
        )

    }




}

export default ToyContainer;