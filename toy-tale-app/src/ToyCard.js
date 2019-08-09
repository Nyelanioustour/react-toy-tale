import React from 'react';

function ToyCard(props){

  const {name, id, likes, image} = props.toy

//   let car = {
//       model: "Toyota",
//       year: "2003",
//       color: "red"
//   }

//   const {model, year, color} = car 

    return (
            <div className="card">
               <h2 className="toy-name">{name}</h2>
               <img src={image} className="toy-avatar" />
               <p className="toy-likes">Likes: {likes}</p>
               <button onClick = {props.handleLike} data-id = {id} className="like-btn" >Like</button>
           </div>

    )


}

export default ToyCard;