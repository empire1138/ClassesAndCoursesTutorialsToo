import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-s3';
  displayButton = '';
  log = [];

  showDetails = false;

  onToggleDetails(){
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1);
  }
}
