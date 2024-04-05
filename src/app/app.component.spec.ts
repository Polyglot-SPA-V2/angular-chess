import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdvancedConfigModalComponent } from './components/advanced-config-modal/advanced-config-modal.component';
import { AngularChessHeaderComponent } from './components/angular-chess-header/angular-chess-header.component';
import { ChessboardWrapperComponent } from './components/chessboard-wrapper/chessboard-wrapper.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdvancedConfigModalComponent,
        AngularChessHeaderComponent,
        ChessboardWrapperComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-chess'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-chess');
  });

  it('should render Chessboard Wrapper component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-chessboard-wrapper')).toBeDefined();
  });

  it('should render Angular Chess Header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-angular-chess-header')).toBeDefined();
  });

  it('should render Advanced Config Modal component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-advanced-config-modal')).toBeDefined();
  });
});
