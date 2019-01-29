import React from 'react';
import {Card} from './Card';    

class Board extends React.Component{
    state = {
      data: [
        {value: 'Card 1'},
        {value: 'Card 2'},
        {value: 'Card 3'},
        {value: 'Card 4'},
        {value: 'Card 5'},
        {value: 'Card 6'}
      ],
      activeCard: null, 
    }
    cardClick = id => {
       this.setState({ activeCard: id })
    }
    addCard = () => {
      const newCard = { value: 'Some value here' };
      this.setState({ data: [...this.state.data, newCard] });
    }
    
    render(){
      return(
        <div className="outerBoard">
        <button onClick={this.addCard} className="button">Add a card</button>

        <div id="board">
        
          {this.state.data.map((item, index) => 
            <Card key={index} 
              value={item.value} 
              active={this.state.activeCard === index}
              cardClick={this.cardClick}
              index = {index}
            />
           )}
         </div>
         </div>
       )
    }
}
export default Board;  