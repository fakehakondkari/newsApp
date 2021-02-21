import { Component, OnInit } from '@angular/core';
import { HackerNewsAPIService } from '../hackernews-api.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

  items: any;

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
                   this.items = this._hackerNewsAPIService.fetchStories();
  }

}
