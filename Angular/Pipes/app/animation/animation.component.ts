import { Component } from '@angular/core';
import { style,state, transition,animate, trigger } from '@angular/animations';
const FadeInFadeOut=trigger('fadeInOut',[
  state('open',style({
    opacity:1
  }
  )),
  state('close',style({
    opacity:0
  })),
  transition('open=>close',animate('1s')),
  transition('close=>open',animate('1s'))
]);
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [FadeInFadeOut]
})
export class AnimationComponent {



  isopen:boolean=false;
  toggleopenclose()
  {
   this.isopen=!this.isopen;
  }
 
 }

