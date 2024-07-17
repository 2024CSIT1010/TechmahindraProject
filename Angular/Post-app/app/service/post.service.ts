import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private allPosts:Post[]=[];


  constructor() { }

  addPost(userPost:Post) {
    this.allPosts.push(userPost);
    console.log(this.allPosts);
  }

getPost():Post[]
{
  return this.allPosts;
}

}