import { Component, EventEmitter, Output } from '@angular/core';
import { UserPick } from '../rock-paper-scissors.interface';

@Component({
  selector: 'app-rsp-game',
  standalone: true,
  imports: [],
  templateUrl: './rsp-game.component.html',
  styleUrl: './rsp-game.component.css'
})
export class RspGameComponent {

  @Output() onComputerTurn = new EventEmitter<String>;

  rockSelected() {
    this.onComputerTurn.emit(UserPick.rock);
  }

  paperSelected() {
    this.onComputerTurn.emit(UserPick.paper);
  }

  scissorsSelected() {
    this.onComputerTurn.emit(UserPick.scissors);
  }

}