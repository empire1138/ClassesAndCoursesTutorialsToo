import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private PostService: PostService) { }

  ngOnInit() {

    this.errorSub = this.PostService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.PostService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    }
    );
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe(); 
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.PostService.createAndStorePost(postData.title, postData.content);
  }
  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.PostService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.PostService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError(){
    this.error = null; 
  }


}
