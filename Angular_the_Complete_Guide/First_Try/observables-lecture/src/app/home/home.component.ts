import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): any {
    this.firstObsSubscription = interval(period: 1000).subscribe(next: count => {

    })
  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();

  }

}
