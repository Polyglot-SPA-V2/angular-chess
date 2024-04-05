import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedConfigModalComponent } from './advanced-config-modal.component';
import { ModalService } from '../../Services/modal.service';
import createSpy = jasmine.createSpy;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChessStarterService } from '../../Services/chess-starter.service';

describe('AdvancedConfigModalComponent', () => {
  let component: AdvancedConfigModalComponent;
  let fixture: ComponentFixture<AdvancedConfigModalComponent>;
  let mockModalService;
  let mockNgbModal;
  let mockChessStarterService;

  beforeEach(async () => {
    mockModalService = {openAdvancedConfigModal: {subscribe: createSpy('openAdvancedConfigModal subscribe')}};
    mockNgbModal = {dismissAll: createSpy('dismissAll')};
    mockChessStarterService = {advanceConfigStartGame: {emit: createSpy('advanceConfigStartGame emit')}};
    await TestBed.configureTestingModule({
      declarations: [ AdvancedConfigModalComponent ],
      providers: [
        { provide: ModalService, useValue: mockModalService },
        { provide: NgbModal, useValue: mockNgbModal },
        { provide: ChessStarterService, useValue: mockChessStarterService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Advanced Config Modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the proper values in the NgModel', () => {
    expect(component.fen).toBe('');
    expect(component.color).toBe('white');
    expect(component.selfPlay).toBe(false);
  });

  it('should subscribe to the openAdvancedConfigModal event when ngOnInit is called', () => {
    component.ngOnInit();
    expect(mockModalService.openAdvancedConfigModal.subscribe).toHaveBeenCalled();
  });

  it('should call NgbModal\'s dismissAll method when closing the Advanced Config Modal', () => {
    component.closeAdvancedConfigModal();
    expect(mockNgbModal.dismissAll).toHaveBeenCalled();
  });
  describe('advancedConfigStartGame method', () => {
    it('should close the modal when called', () => {
      component.advancedConfigStartGame();
      expect(mockNgbModal.dismissAll).toHaveBeenCalled();
    });
    it('should have the ChessStarterService emit the data properly', () => {
      component.advancedConfigStartGame();
      expect(mockChessStarterService.advanceConfigStartGame.emit).toHaveBeenCalledWith({ fen: '', color: 'white', selfPlay: false});
    });
  });
});
