import { Component, EventEmitter, Output } from '@angular/core';
import { UserPick } from '../rock-paper-scissors.interface';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {
lizardSelected() {
throw new Error('Method not implemented.');
}
spockSelected() {
throw new Error('Method not implemented.');
}

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