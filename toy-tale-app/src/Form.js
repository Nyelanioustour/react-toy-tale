import React from 'react';

class Form extends React.Component{

    render(){
        return(
        <div className='container' >
        <h3>Create a toy!</h3>
        <form className = "add-toy-form" onSubmit={this.props.handleNewToy}>
            <input className="input-text" name="name" type='text' placeholder="Enter Toy's Name"/>
            <input className="input-text" name="image" type='text' placeholder="Enter Toy's Image URL"/>
            <input className="input-text" type='submit' value='Create New Toy'/>
        </form>
    </div>)



    }




}
export default Form;