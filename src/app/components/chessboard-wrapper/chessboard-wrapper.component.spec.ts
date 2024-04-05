import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChessboardWrapperComponent } from './chessboard-wrapper.component';

describe('ChessboardWrapperComponent', () => {
  let component: ChessboardWrapperComponent;
  let fixture: ComponentFixture<ChessboardWrapperComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessboardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Chessboard Wrapper component', () => {
    expect(component).toBeTruthy();
  });
  it('should render the chess-board custom element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('chess-board')).toBeDefined();
  });
});
