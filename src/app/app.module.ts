import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularChessHeaderComponent } from './components/angular-chess-header/angular-chess-header.component';
import { ChessboardWrapperComponent } from './components/chessboard-wrapper/chessboard-wrapper.component';
import { AdvancedConfigModalComponent } from './components/advanced-config-modal/advanced-config-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngularChessHeaderComponent,
    ChessboardWrapperComponent,
    AdvancedConfigModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
