import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.sendPost(postData).subscribe(result => {
      console.log(result.status);
      this.fetchPosts();
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }


  onClearPosts(){
    this.postService.deletePosts().subscribe(response =>{
      this.fetchPosts();
    });
  }

  onClearPostsOnebyOne() {
    this.loadedPosts.forEach(post => {
      this.postService.deletePost(post['id'])
      .subscribe(response =>{
        console.log('Deleted post for id: '+ post['id']);
        this.fetchPosts();
      });
    });
  }

  fetchPosts(){
    this.isFetching = true;
    this.postService.getPosts().subscribe(
      response => {
        //just to fake to display the loading messate
        setTimeout(() => {
          this.isFetching = false;
          this.loadedPosts = response;
        }, 500);
      }, error => {
        this.error = error.message;
      });
  }
}
