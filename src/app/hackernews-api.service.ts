import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

   fetchStories(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/topstories.json`);
  } 
}  


