import { SmartJoke } from 'src/app/models/SmartJoke.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() jokeCreation = new EventEmitter();

  title = 'Create mind trick questions';
  isDisabled: true;

  newQuestion: '';
  newAnswer: '';

  newSmartJoke: SmartJoke = {
    question: '',
    answer: '',
  };

  createJoke(): void {
    this.newSmartJoke = {
      question: this.newQuestion,
      answer: this.newAnswer,
    };

    this.jokeCreation.emit(this.newSmartJoke);
    console.log('this.newSmartJoke', this.newSmartJoke);
    this.newQuestion = '';
    this.newAnswer = '';
  }
}
