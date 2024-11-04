import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { UserPick, Result } from '../rock-paper-scissors.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {
  private isBrowser: boolean;
  private score: number = 0;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initializeScore();
    }
  }

  private initializeScore(): void {
    const scoreTemp = localStorage.getItem('score');
    if (scoreTemp !== null) {
      this.score = parseInt(scoreTemp, 10);
    } else {
      localStorage.setItem('score', '0');
    }
  }

  generate_piece_cpu(): Observable<String> {
    let pieces: String[] = [UserPick.rock, UserPick.paper, UserPick.scissors];
    const choose: number = Math.floor(Math.random() * 3);
    return of(pieces[choose]).pipe(delay(1500));
  }

  resultGame(picked_you: String, picked_cpu: String): Observable<number> {
    if (picked_you === picked_cpu) {
      return of(Result.draw);
    }

    if (picked_you === UserPick.rock) {
      if (picked_cpu === UserPick.scissors) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    if (picked_you === UserPick.paper) {
      if (picked_cpu === UserPick.rock) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    if (picked_you === UserPick.scissors) {
      if (picked_cpu === UserPick.paper) {
        return of(Result.you_win);
      } else {
        return of(Result.you_lose);
      }
    }

    return of(-1);
  }

  getScore(): number {
    if (this.isBrowser) {
      const scoreTemp = localStorage.getItem('score');
      return scoreTemp ? parseInt(scoreTemp, 10) : 0;
    }
    return 0;
  }

  checkScore(): void {
    if (this.isBrowser && localStorage.getItem('score') === null) {
      localStorage.setItem('score', '0');
    }
  }

  scoreChange(result: number): number {
    if (!this.isBrowser) {
      return 0;
    }

    let score = this.getScore();

    if (result === Result.you_win) {
      score++;
    } else if (result === Result.you_lose) {
      score = 0;
    }

    localStorage.setItem('score', score.toString());
    return score;
  }
}