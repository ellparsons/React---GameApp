import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Square from './square';
import ResetButton from './resetButton';

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: [null,null,null,null,null,null,null,null,null],
            counter: 0
        };
    }
    
    renderSquare(i) {
      return (
      <Square 
        value={this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      />
      ); 
    }

    resetGame(){
      const squares = [null,null,null,null,null,null,null,null,null];
      const counter = 0;
      this.setState ({squares,counter});
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        let counter = this.state.counter;
        if(squares[i] == null){
            if (counter <= 9){    
                squares[i] = (counter % 2 == 0 ? "O" : "X");
            }else{
                console.log("Hello");
                counter = 0;
            }
            counter++; 
    
            this.setState({squares,counter});
        }
        
    }

    render() {
      const status = 'Next player:' + (this.state.counter % 2 == 0 ? "O" : "X");
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {this.state.counter == 9 ? <ResetButton onClick = {() => this.resetGame()}/> : null }
        </div>
      );
    }
  }