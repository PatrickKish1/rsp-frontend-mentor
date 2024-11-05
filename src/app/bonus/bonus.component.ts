import { Component, EventEmitter, Output } from '@angular/core';
import { UserPick } from '../rock-paper-scissors.interface';
import { ScoreBoardComponent } from "../score-board/score-board.component";
import { RulesButtonComponent } from "../rules-button/rules-button.component";

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [ScoreBoardComponent, RulesButtonComponent],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {
score: number = 0;
logo = "assets/images/logo-bonus.svg";
logoWidth = "120";
logoHeight = "120";


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