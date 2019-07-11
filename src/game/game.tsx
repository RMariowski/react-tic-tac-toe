import React from "react";
import { Board } from "../board/board";
import { calculateWinner } from "../helpers";
import { GameState } from "./game-state";

export class Game extends React.Component<any, GameState> {
  constructor(props: any) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true
    };
  }

  public render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i: number) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }

  private handleClick(i: number) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    history.push({ squares });

    this.setState({
      history: history,
      xIsNext: !this.state.xIsNext
    });
  }
}
