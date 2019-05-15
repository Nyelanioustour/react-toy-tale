import React from 'react';

function ToyCard(props){

  const {name, id, likes, image} = props.toyDetails

    return (
            <div className="card">
               <h2 className="toy-name">{name}</h2>
               <img src={image} className="toy-avatar" />
               <p className="toy-likes">Likes: {likes}</p>
               <button className="like-btn" onClick={()=>{props.handleIncreaseLikes(id)}}>Like</button>
           </div>

    )


}

export default ToyCard;

