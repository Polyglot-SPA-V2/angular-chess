import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChessStarterService {
  constructor() { }
  quickStartGame = new EventEmitter();
  advanceConfigStartGame = new EventEmitter();
}
