import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  

  constructor(private postService:PostService){
    
  }

  postFormSubmit(form:NgForm){

    let userPost:Post={
      id:"122",
      title:form.value.title,
      discription:form.value.discription,
      author:form.value.author,
      date:new Date(),
      age:form.value.age
    };
    this.postService.addPost(userPost);
     }
  
}