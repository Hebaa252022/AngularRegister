import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './Component/Slideshow/Slideshow.component';
import { TextComponent } from './Component/Text/Text.component';
import { RegisterComponent } from './Component/Register/Register.component';
import { StudentComponent } from './Component/Student/Student.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    TextComponent,
    RegisterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
