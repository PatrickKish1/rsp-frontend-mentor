import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rules-button',
  standalone: true,
  imports: [],
  templateUrl: './rules-button.component.html',
  styleUrl: './rules-button.component.css'
})
export class RulesButtonComponent {
  isModalOpen: boolean = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}