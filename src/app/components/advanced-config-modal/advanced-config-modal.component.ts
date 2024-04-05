import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../Services/modal.service';
import { ChessStarterService } from '../../Services/chess-starter.service';

@Component({
  selector: 'app-advanced-config-modal',
  templateUrl: './advanced-config-modal.component.html',
  styleUrls: ['./advanced-config-modal.component.css']
})
export class AdvancedConfigModalComponent implements OnInit {
  fen = '';
  color = 'white';
  selfPlay = false;

  constructor(
    private modalService: NgbModal,
    private modalCommunicator: ModalService,
    private chessStarterService: ChessStarterService) { }

  @ViewChild('content') content: ElementRef | undefined;

  private open(content: ElementRef<any> | undefined): void {
    this.modalService.open( content, {centered: true} );
  }

  advancedConfigStartGame(): void {
    const data = {
      fen: {},
      color: {},
      selfPlay: {}
    };
    data.fen = this.fen;
    data.color = this.color;
    data.selfPlay = this.selfPlay;
    this.chessStarterService.advanceConfigStartGame.emit(data);
    this.modalService.dismissAll();
  }

  closeAdvancedConfigModal(): void {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    this.modalCommunicator.openAdvancedConfigModal.subscribe(() => {
      this.open(this.content);
    });
  }
}
