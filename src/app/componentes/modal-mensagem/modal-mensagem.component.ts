import { Component, OnInit,Input } from '@angular/core';
import { Mensagem } from './mensagem';

@Component({
  selector: 'app-modal-mensagem',
  templateUrl: './modal-mensagem.component.html',
  styleUrls: ['./modal-mensagem.component.css']
})
export class ModalMensagemComponent implements OnInit {

  constructor() { }

  @Input()
  msgModal!: Mensagem;
  ngOnInit(): void {
  }

}
