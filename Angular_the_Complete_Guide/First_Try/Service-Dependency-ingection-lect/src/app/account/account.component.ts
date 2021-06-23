import { Component, OnInit, Input } from '@angular/core';
import { loggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [loggingService, AccountService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };
  @Input() id: number;



  constructor(private loggingService: loggingService,
              private AccountService: AccountService) { }

  onSetTo(status: string): any {
    this.AccountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }

  ngOnInit(): void {
  }

}
