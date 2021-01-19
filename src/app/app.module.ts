import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { JokeComponent } from './joke/joke.component';
import { JokeCardComponent } from './joke/joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    JokeComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
