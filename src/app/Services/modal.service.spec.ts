import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { EventEmitter } from '@angular/core';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should create the Modal Service', () => {
    expect(service).toBeTruthy();
  });
  it('should have a property of type Event Emitter', () => {
    expect(service.openAdvancedConfigModal).toBeInstanceOf(EventEmitter);
  });
});
