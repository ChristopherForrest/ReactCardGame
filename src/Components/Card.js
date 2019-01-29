import React from 'react';

const Card = props => (

    <div className="cardOuter" style={props.active ? {backgroundColor:'green'} : {backgroundColor:'red'}}>
      {props.active ? <div className="cardIndex">{props.index + 1}</div> : <div className="cardIndex">?</div>}
      <div
        
        className={props.active ? 'activeCard' : 'inactiveCard'}
        style={props.active ? { backgroundImage:`url('http://placekitten.com/${Math.floor(Math.random() * (450-250) + 250)}/350')`} : {backgroundImage:"url('Rook.png')"}}
        onClick={() => props.cardClick(props.index)}
       
        >
      </div>
    </div>
);

export { Card };