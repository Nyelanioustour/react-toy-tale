import React from 'react';
import ToyCard from './ToyCard';
class ToyContainer extends React.Component{
    
    render(){
        return(
            <div id="toy-collection">
            {this.props.toyCollection.map(toy=> <ToyCard toyDetails={toy} handleIncreaseLikes ={this.props.handleIncreaseLikes}/>)}
            </div>
        )


    }




}

export default ToyContainer;


