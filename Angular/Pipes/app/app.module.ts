import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemopComponent } from './demop/demop.component';
import { ReversePipe } from './reverse.pipe';
import { LetterPipe } from './letter.pipe';
import { GmailPipe } from './gmail.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { RoiPipe } from './roi.pipe';
import { IorPipe } from './ior.pipe';
import { AnimationComponent } from './animation/animation.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DemopComponent,
    ReversePipe,
    LetterPipe,
    GmailPipe,
    TemperaturePipe,
    RoiPipe,
    IorPipe,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
