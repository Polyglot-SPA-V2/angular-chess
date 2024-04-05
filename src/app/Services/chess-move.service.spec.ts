import { TestBed } from '@angular/core/testing';

import { ChessMoveService } from './chess-move.service';

describe('ChessMoveService', () => {
  let service: ChessMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
