import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, YouTubePlayerModule],
  declarations: [AppComponent, WelcomeComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
