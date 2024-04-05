import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChessHeaderComponent } from './angular-chess-header.component';
import {ModalService} from '../../Services/modal.service';
import {ChessStarterService} from '../../Services/chess-starter.service';
import createSpy = jasmine.createSpy;

describe('AngularChessHeaderComponent', () => {
  let component: AngularChessHeaderComponent;
  let fixture: ComponentFixture<AngularChessHeaderComponent>;
  let mockModalService;
  let mockChessStarterService;

  beforeEach(async () => {
    mockModalService = {openAdvancedConfigModal: {emit: createSpy('openAdvancedConfigModal emit')}};
    mockChessStarterService = {quickStartGame: {emit: createSpy('quickStartGame emit')}};
    await TestBed.configureTestingModule({
      declarations: [ AngularChessHeaderComponent ],
      providers: [
        { provide: ModalService, useValue: mockModalService },
        { provide: ChessStarterService, useValue: mockChessStarterService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Angular Chess Header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the ChessStarter Service emit the quickStartGame event when emitQuickStartGame is called', () => {
    component.emitQuickStartGame();
    expect(mockChessStarterService.quickStartGame.emit).toHaveBeenCalled();
  });

  it('should have the Modal Service emit the openAdvancedConfigModal event when emitQuickStartGame is called', () => {
    component.openAdvancedConfigModal();
    expect(mockModalService.openAdvancedConfigModal.emit).toHaveBeenCalled();
  });
});
