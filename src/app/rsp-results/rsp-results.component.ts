import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPick, Result } from '../rock-paper-scissors.interface';
import { RockPaperScissorsService } from '../services/rock-paper-scissors.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './rsp-results.component.html',
  styleUrl: './rsp-results.component.css'
})
export class RspResultsComponent implements OnInit {
  result_done: boolean = false;
  picked_cpu_done: boolean = false;

  @Input() picked: String = UserPick.none;
  picked_cpu: String = UserPick.none;

  resultGame: String = '';
  score: number = 0;

  @Output() onAgainPlay = new EventEmitter<void>();
  @Output() onScoreChange = new EventEmitter<number>();
  @Output() onCloseModal = new EventEmitter<void>;

  closeModal() {
    this.onCloseModal.emit();
  }

  constructor(private readonly service: RockPaperScissorsService) { }

  ngOnInit(): void {
    this.service.generate_piece_cpu().subscribe(
      (picked_cpu) => {
        this.picked_cpu = picked_cpu;
        this.picked_cpu_done = true;

        setTimeout(() => {
          this.service.resultGame(this.picked, this.picked_cpu).subscribe(
            result => {
              this.result_done = true;
              if (result == Result.you_win) {
                this.resultGame = 'YOU WIN';
                this.score = this.service.scoreChange(Result.you_win);
                this.onScoreChange.emit(this.score);
              } else if (result == Result.you_lose) {
                this.resultGame = 'YOU LOSE';
                this.score = this.service.scoreChange(Result.you_lose);
                this.onScoreChange.emit(this.score);
              } else {
                this.resultGame = 'DRAW';
              }
            }
          )
        }, 1000);
      }
    )
  }

  againPlay() {
    this.onAgainPlay.emit();
  }

}