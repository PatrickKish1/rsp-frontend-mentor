import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { UserPick, Result } from '../rock-paper-scissors.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RsplsService {
  private isBrowser: boolean;
  private bonusScore: number = 0;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initializeBonusScore();
    }
  }

  private initializeBonusScore(): void {
    const bonusScoreTemp = localStorage.getItem('bonusScore');
    if (bonusScoreTemp !== null) {
      this.bonusScore = parseInt(bonusScoreTemp, 10);
    } else {
      localStorage.setItem('bonusScore', '0');
    }
  }

  generate_piece_cpu(): Observable<String> {
    let pieces: String[] = [
      UserPick.rock,
      UserPick.paper,
      UserPick.scissors,
      UserPick.lizard,
      UserPick.spock
    ];
    const choose: number = Math.floor(Math.random() * pieces.length);
    return of(pieces[choose]).pipe(delay(1500));
  }

  resultGame(picked_you: String, picked_cpu: String): Observable<number> {
    if (picked_you === picked_cpu) {
      return of(Result.draw);
    }

    const winningCombinations: { [key: string]: String[] } = {
      [UserPick.scissors]: [UserPick.paper, UserPick.lizard],
      [UserPick.paper]: [UserPick.rock, UserPick.spock],
      [UserPick.rock]: [UserPick.lizard, UserPick.scissors],
      [UserPick.lizard]: [UserPick.spock, UserPick.paper],
      [UserPick.spock]: [UserPick.scissors, UserPick.rock]
    };

    if (winningCombinations[picked_you as string]?.includes(picked_cpu)) {
      return of(Result.you_win);
    } else {
      return of(Result.you_lose);
    }
  }

  getBonusScore(): number {
    if (this.isBrowser) {
      const bonusScoreTemp = localStorage.getItem('bonusScore');
      return bonusScoreTemp ? parseInt(bonusScoreTemp, 10) : 0;
    }
    return 0;
  }

  checkBonusScore(): void {
    if (this.isBrowser && localStorage.getItem('bonusScore') === null) {
      localStorage.setItem('bonusScore', '0');
    }
  }

  BonusScoreChange(result: number): number {
    if (!this.isBrowser) {
      return 0;
    }

    let bonusScore = this.getBonusScore();

    if (result === Result.you_win) {
      bonusScore++;
    } else if (result === Result.you_lose) {
      bonusScore = bonusScore;
    }

    localStorage.setItem('bonusScore', bonusScore.toString());
    return bonusScore;
  }
}