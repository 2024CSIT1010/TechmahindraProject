import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.css'
})
export class ShowPostComponet {
  allPost:Post[]=[];
  constructor(private postService:PostService)
  {
    this.allPost=postService.getPost();
  }


}