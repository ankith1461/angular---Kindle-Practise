import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'joke',
  template: `
  <div class="card-block">
    <h4 class="card-title">{{joke.setup}}</h4>
    <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
    <a (click)="joke.toggle()" class="btn btn-warning">Tell Me</a>
  </div>`
})
export class jokeComponent {
    @Input() joke: Joke;
}

//Our new Domain Models to extract rather than storing data directly in objects
export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string,punchline: string){
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle(){
    this.hide=!this.hide;
  }
}