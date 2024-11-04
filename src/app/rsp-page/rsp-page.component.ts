import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RockPaperScissorsService } from '../services/rock-paper-scissors.service';
import { UserPick } from '../rock-paper-scissors.interface';
import { ScoreBoardComponent as ScoreBoardComponent } from "../score-board/score-board.component";
import { RspResultsComponent } from "../rsp-results/rsp-results.component";
import { RspGameComponent } from "../rsp-game/rsp-game.component";
import { BonusComponent } from "../bonus/bonus.component";

@Component({
  selector: 'app-rsp-page',
  standalone: true,
  imports: [ScoreBoardComponent, RspResultsComponent, RspGameComponent, BonusComponent],
  templateUrl: './rsp-page.component.html',
  styleUrl: './rsp-page.component.css'
})
export class RspPageComponent implements OnInit {
  isModalOpen = false;
  computerTurn: boolean = false;
  orignalPicked: String = UserPick.none;
  score: number = 0;

  @Output() onComputerTurn = new EventEmitter<string>();

  constructor(private RockPaperScissorsService: RockPaperScissorsService) {}

  ngOnInit(): void {
    this.RockPaperScissorsService.checkScore();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ComputerTurn(picked: String) {
    if (picked != UserPick.none) {
      this.orignalPicked = picked;
      this.computerTurn = true;
      this.onComputerTurn.emit();
    }
  }

  againPlay() {
    this.computerTurn = false;
  }

  scoreChange(score: number) {
    this.score = score;
  }
}