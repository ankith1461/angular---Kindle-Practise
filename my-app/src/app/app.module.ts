import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jokeComponent} from './joke.component';
import { jokeListComponent} from './jokeList.component';
import { JokeFormComponent} from './jokeForm.component';
import { JokesMock } from './jokesMock';

@NgModule({
  declarations: [
    AppComponent,
    jokeComponent,
    jokeListComponent,
    JokeFormComponent,
    JokesMock
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
