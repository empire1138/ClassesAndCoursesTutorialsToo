import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  title = 'Service-Dependency-ingection-lect';
 
  accounts: {name: string, status: string}[] = [];

  constructor(private AccountService: AccountService){}


  ngOnInit(): any {
    this.accounts = this.AccountService.accounts;
  }

}

