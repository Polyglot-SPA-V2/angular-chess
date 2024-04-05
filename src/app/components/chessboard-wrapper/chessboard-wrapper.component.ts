import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ChessStarterService } from '../../Services/chess-starter.service';
import 'chessboard-element';
import { Chess, validateFen } from 'chess.js';

@Component({
  selector: 'app-chessboard-wrapper',
  templateUrl: './chessboard-wrapper.component.html',
  styleUrls: ['./chessboard-wrapper.component.css']
})
export class ChessboardWrapperComponent implements OnInit {
  @ViewChild('chessboard') chessboard: ElementRef | undefined;
  constructor(private chessStarterService: ChessStarterService) { }
  game = new Chess();
  randomMoveInterval: string | number | undefined;
  draggablePieces = false;
  orientation = 'white';
  addEventListeners(game: Chess): void {
    // @ts-ignore
    this.chessboard.nativeElement.addEventListener('drag-start', (e) => {
      // eslint-disable-next-line no-unused-vars
      const {source, piece, position, orientation} = e.detail;

      // do not pick up pieces if the game is over
      if (game.isGameOver()) {
        e.preventDefault();
        return;
      }

      // only pick up pieces for White
      if (piece.search(/^b/) !== -1) {
        e.preventDefault();
        return;
      }
    });
    // @ts-ignore
    this.chessboard.nativeElement.addEventListener('drop', (e) => {
      const {source, target, setAction} = e.detail;
      // see if the move is legal
      const move = this.game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) {
        setAction('snapback');
        return;
      }

      // make random legal move for black
      // @ts-ignore
      window.setTimeout(this.makeRandomMove(this.game), 250);
    });
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    // @ts-ignore
    this.chessboard.nativeElement.addEventListener('snap-end', () => {
      // @ts-ignore
      this.chessboard.nativeElement.setPosition(this.game.fen());
    });
  }
  makeRandomMove(game: Chess): void {
    const possibleMoves = game.moves();
    // game over
    if (!game.isGameOver() && possibleMoves.length === 0) {
      // @ts-ignore
      clearInterval(this.randomMoveInterval);
      return;
    }

    // @ts-ignore
    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    this.game.move(possibleMoves[randomIdx]);
    // @ts-ignore
    this.chessboard.nativeElement.setPosition(this.game.fen());
  }
  ngOnInit(): void {
    this.chessStarterService.quickStartGame.subscribe(() => {
      this.draggablePieces = true;
      this.addEventListeners(this.game);
      // @ts-ignore
      this.chessboard.nativeElement.start();
    });
    this.chessStarterService.advanceConfigStartGame.subscribe((data) => {

      const result = validateFen(data.fen);

      if (data.fen && result.ok) {
        // @ts-ignore
        this.chessboard.nativeElement.setPosition(data.fen);
        this.game.load(data.fen);
      } else {
        // @ts-ignore
        this.chessboard.nativeElement.start();
      }
      this.orientation = data.color;
      if (data.selfPlay) {
        // @ts-ignore
        this.randomMoveInterval = window.setInterval(() => {
          this.makeRandomMove(this.game);
        }, 500);
      } else {
        this.draggablePieces = true;
        this.addEventListeners(this.game);
        if (this.game.turn() === 'b') {
          // @ts-ignore
          window.setTimeout(this.makeRandomMove(this.game), 500);
        }
      }
    });
  }
}
