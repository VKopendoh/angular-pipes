import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });

  date2: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
  date3$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date3: Date;

  e: number = Math.E;

  str = 'hello world';

  date: Date = new Date();
  float = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 4,
        f: 10
      }
    }
  };

  posts: Post[] = [
    {title: 'Beer', text: 'Take some beer'},
    {title: 'Water', text: 'Drink some water'},
    {title: 'Wine', text: 'Get wine bro'}
  ];
  search = '';
  searchField = 'title';

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'super duper course'
    });
  }

// classic use Observable
  ngOnInit(): void {
    this.date3$.subscribe(date => {
      this.date3 = date;
    });
  }
}
