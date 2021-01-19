import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmartJoke } from '../models/SmartJoke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {

  @Input() jokes: SmartJoke[];

  @Output() jokeDeletion = new EventEmitter();

  deleteJoke(i: number): void {
    this.jokeDeletion.emit(i);
  }
}
