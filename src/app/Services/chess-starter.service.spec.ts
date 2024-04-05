import { TestBed } from '@angular/core/testing';
import { EventEmitter} from '@angular/core';

import { ChessStarterService } from './chess-starter.service';

describe('ChessStarterService', () => {
  let service: ChessStarterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessStarterService);
  });

  it('should create the Chess Starter Service', () => {
    expect(service).toBeTruthy();
  });
  it('should have two properties of type Event Emitter', () => {
    expect(service.quickStartGame).toBeInstanceOf(EventEmitter);
    expect(service.advanceConfigStartGame).toBeInstanceOf(EventEmitter);
  });
});
