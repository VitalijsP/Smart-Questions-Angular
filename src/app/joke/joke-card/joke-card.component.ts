import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmartJoke } from 'src/app/models/SmartJoke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent {
  @Input() joke: SmartJoke;
  @Output() jokeDeletion = new EventEmitter();

  isVisible: true;

  deleteJoke(): void {
    this.jokeDeletion.emit();
  }
}
