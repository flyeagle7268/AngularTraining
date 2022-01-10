import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{

  constructor(private http: HttpClient) {

  }

  sendPost(postData: Post){
    // Send Http request
    return this.http.post<{name: string}>(
      'https://ng-complete-guide-78369-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData, {
          observe: 'response' //in case want receive full response after sending the data
        });
  }

  //Gets http response
  getPosts(){
    return this.http.get<{ [key: string]: Post }>(
      'https://ng-complete-guide-78369-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        headers: new HttpHeaders({'Custom-Headers': 'Hello'}),
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(map(responseData => {
        const postArray = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key))
          {
            postArray.push({...responseData[key], id: key})
          }
        }
        return postArray;
      }));
  }

  //Delete all posts
  deletePosts(){
    return this.http.delete('https://ng-complete-guide-78369-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
  }

  //Delete single post
  deletePost(id: string){
    let httpParams = new HttpParams().set('id', id);
    let options = {params: httpParams};

    return this.http.delete(
      'https://ng-complete-guide-78369-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      options);
  }

}
