import { Component } from '@angular/core';
import{ OnInit} from '@angular/core';
@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent implements OnInit {

   ngOnInit(): void {
       let saved=localStorage.getItem("All TAsk");
       this.allTasks=saved?JSON.parse(saved):[];
   }
 //allTasks:Task[]=[];
 taskTitle:string=" ";
 taskDate:Date=new Date();
 allTasks:Task[]=[];


  createTask()
 {  
  let task:Task=
  {
    id:this.getRandomTaskId(),
    title:this.taskTitle,
    date:this.taskDate
  };
  this.allTasks.push(task);
  localStorage.setItem("All TAsk",JSON.stringify(this.allTasks));
     console.log(this.allTasks);
     this.taskTitle="";
     this.taskDate=new Date();
 }
 deleteTask(index: number)
 {
  this.allTasks.splice(index,1);
  localStorage.setItem("All TAsk",JSON.stringify(this.allTasks));
 }
 getRandomTaskId():string
 {
  const characterSet="abcdefghijklmnopqrstuvwxyz0123456789";
  let result=' ';
  for(let i=0;i<5;i++)
    {
      result=result+characterSet.charAt(Math.floor(Math.random()*characterSet.length));
    }
    return result;
 }
}
interface Task{
  id:string;
  title:string;
  date:Date;
}