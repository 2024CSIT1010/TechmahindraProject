import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrl: './calcu.component.css'
})
export class CalcuComponent {
  currentInput: string = '';
  result: string = '';
   rem:string='';
  appendNumber(number: string) {
    this.currentInput += number;
  }

  appendOperator(operator: string) {
    this.currentInput += operator;
  }

  clear() {
    this.currentInput = '';
    this.result = '';
  }

  delete() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  calculate() {
    try {
      this.result = eval(this.currentInput);
       this.currentInput=this.result;
       this.result='';

    } catch (e) {
      this.result = 'Error';
    }
  }
}
