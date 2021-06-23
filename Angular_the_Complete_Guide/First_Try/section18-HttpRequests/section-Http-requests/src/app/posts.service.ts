import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PostService {

    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };
        this.http.post('https://section18-httprequests-course-default-rtdb.firebaseio.com/posts/json', postData,
            {
                observe: 'response'
            }
        )
            .subscribe(res => {
                console.log(res);
            }, error => {
                this.error.next(error.message);
            }
            );
    }

    fetchPosts() {
        return this.http
            .get('https://section18-httprequests-course-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                    params: new HttpParams().set('print', 'pretty')
                })
            .pipe(
                map((responseData: { [key: string]: Post }) => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            )
    }

    deletePosts() {
        return this.http.delete('https://section18-httprequests-course-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'json'
            }
        ).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Sent){
                console.log(event.type);
            }
            if (event.type === HttpEventType.Response){
                console.log(event.body);
            }
        }));
    }

}


