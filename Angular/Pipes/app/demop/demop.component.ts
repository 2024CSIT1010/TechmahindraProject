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
  transition('open=>close',animate('Is easy-out')),
  transition('close=>open',animate('1s ease-in'))
]);

@Component({
  selector: 'app-demop',
  templateUrl: './demop.component.html',
  styleUrl: './demop.component.css',
  animations:[FadeInFadeOut]
})
export class DemopComponent {
 //today:number=Date.now();
 //text:string="Deepanshu Goel";
 //amount:number=111;
 //percentage:number=0.45;
 //z:number=25;
 //rom:string='IX';
 //y:number=953;
 isopen:boolean=false;
 toggleopenclose()
 {
  this.isopen=!this.isopen;
 }

}
