import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RockPaperScissorsService } from '../services/rock-paper-scissors.service';
import { UserPick } from '../rock-paper-scissors.interface';
import { ScoreBoardComponent as ScoreBoardComponent } from "../score-board/score-board.component";
import { RspResultsComponent } from "../rsp-results/rsp-results.component";
import { RspGameComponent } from "../rsp-game/rsp-game.component";
import { BonusComponent } from "../bonus/bonus.component";
import { RulesButtonComponent } from "../rules-button/rules-button.component";
import { RsplsService } from '../services/rspls.service';

@Component({
  selector: 'app-rsp-page',
  standalone: true,
  imports: [ScoreBoardComponent, RspResultsComponent, RspGameComponent, BonusComponent, RulesButtonComponent],
  templateUrl: './rsp-page.component.html',
  styleUrl: './rsp-page.component.css'
})
export class RspPageComponent implements OnInit {
  isModalOpen = false;
  isBonus = true;
  bonusScore = 0;
  computerTurn = false;
  BonusComputerTurn = false;
  orignalPicked: String = UserPick.none;
  score: number = 0;
  logo = "assets/images/logo.svg";
  logoWidth = "120";
  logoHeight = "120";
  modalLogo = "assets/images/image-rules.svg";
  bonusModalLogo = "assets/images/image-rules-bonus.svg";



  @Output() onComputerTurn = new EventEmitter<string>();
  @Output() onBonusComputerTurn = new EventEmitter<string>();

  constructor(private RockPaperScissorsService: RockPaperScissorsService, private RsplsService: RsplsService) {}

  ngOnInit(): void {
    this.RockPaperScissorsService.checkScore();
    this.RsplsService.checkBonusScore();
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
  bonusComputerTurn(picked: String) {
    if (picked != UserPick.none) {
      this.orignalPicked = picked;
      this.BonusComputerTurn = true;
      this.onBonusComputerTurn.emit();
    }
  }

  againPlay() {
    this.computerTurn = false;
  }
  bonusAgainPlay() {
    this.BonusComputerTurn = false;
  }

  scoreChange(score: number) {
    this.score = score;
  }

  bonusScoreChange(bonusScore: number) {
    this.bonusScore = bonusScore;
  }
}