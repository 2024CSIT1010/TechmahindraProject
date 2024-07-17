import { Component } from '@angular/core';


@Component({
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrl: './expensetracker.component.css'
})
export class ExpensetrackerComponent 
{
  ExpenseTitle:string = "";
  Expensedate:Date = new Date();

  allExpense:Expense[]=[];

  create_Expense() {
    let newExpense:Expense = {
      id:this.getrandomtaskid(),
      title:this.ExpenseTitle,
      date:this.Expensedate
    };
    this.allExpense.push(newExpense);
    this.ExpenseTitle = "";
    this.Expensedate = new Date();
    console.log(this.allExpense);
  
  } getrandomtaskid():string
  {
    const characterset="abcdefghijklmnopqrstuvwxyz0123456789"
    let result:string = "";
    for(let i=0;i<5;i++)
      {
        result= result + characterset.charAt(Math.floor(Math.random()*characterset.length));
      }
    
    return result;
  }
  delete_Task(index:number)
  {
    this.allExpense.splice(index,1);
  }
}

interface task
{
  id:string;
  title:string;
  date:Date;
}