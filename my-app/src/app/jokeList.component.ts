import { Component } from '@angular/core';
import { Joke } from './joke.component';
import { JokeFormComponent } from './jokeForm.component';
import { JokesMock } from './jokesMock';

@Component({
  selector: 'joke-list',
  template: `
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <joke *ngFor="let j of jokes" [joke]="j"></joke>`
})
export class jokeListComponent {
    jokes: Joke[];

    constructor(){
        this.jokes = JokesMock;
    }

    addJoke(joke){this.jokes.unshift(joke);}
}