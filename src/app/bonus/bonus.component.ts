import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserPick } from '../rock-paper-scissors.interface';
import { ScoreBoardComponent } from "../score-board/score-board.component";
import { RulesButtonComponent } from "../rules-button/rules-button.component";
import { RspResultsComponent } from '../rsp-results/rsp-results.component';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [ScoreBoardComponent, RulesButtonComponent, RspResultsComponent],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {
  isModalOpen = false;
  computerTurn: boolean = false;
  orignalPicked: String = UserPick.none;


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

  lizardSelected() {
    this.onComputerTurn.emit(UserPick.lizard);
  }

  spockSelected() {
    this.onComputerTurn.emit(UserPick.spock);
  }

}