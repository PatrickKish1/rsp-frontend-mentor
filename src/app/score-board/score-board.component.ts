import { Component, Inject, Input, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent implements OnInit {
  @Input() score: number = 0;
  @Input() logo: string = ``;
  @Input() logoWidth: string = '';
  @Input() logoHeight: string = '';

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const scoreTemp = localStorage.getItem('score');
      if (scoreTemp) {
        this.score = Number.parseInt(scoreTemp);
      }
    }
    
  }


}