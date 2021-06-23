import { Component, OnInit } from '@angular/core';
import { loggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [loggingService, AccountService]
})
export class NewAccountComponent implements OnInit {


  constructor(private loggingService: loggingService,
    private AccountService: AccountService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit(): void {
  }

}
