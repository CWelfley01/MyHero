import React from 'react'







export default function Hero(props) {
    const func = function () {
        console.log(props)
    }
    return (
      <div className="hero">
          {func()}
          <div className="portrait">
            <img src={props.image}/>
          </div>
          <div className="left-side">
            <h1>{props.name}</h1>
            <h3>{props.relation}</h3>
            <h3>{props.quirk}</h3>          
          </div>
          <div className="right-side">            
            <h3>{props.strengths}</h3>
            <h3>{props.weaknesses}</h3>
          </div>
      </div>
        
      );
    
  }