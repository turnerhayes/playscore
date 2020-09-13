import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { WhiteKeyPipe } from './keyboard/white-key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WhiteKeyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: Window,
      useValue: window,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
