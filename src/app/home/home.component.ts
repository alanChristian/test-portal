import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  questionGroup = new FormGroup({
    first: new FormControl(''),
    second: new FormControl(''),
    third: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  private questions: String[] = [
    'Is this a question?',
    'Another Question',
    'Yes and another one',
    'And another one',
    'It keeps going',
    'Wont stop',
    'Aaaahhhhhh',
    'Please make it stop',
    'Dead!',
  ];

  public randomizedQuestionArray: String[] = [];

  public questionsFormControl = ['first', 'second', 'third'];

  ngOnInit(): void {
    this.randomizeQuestions(3);
  }

  private randomizeQuestions(totalQuestions: number) {
    for (let i = 0; i < totalQuestions; i++) {
      const index = Math.floor(Math.random() * (this.questions.length - 1));
      this.randomizedQuestionArray.push(this.questions[index]);
      this.questions.splice(index, 1);
    }
  }
}
