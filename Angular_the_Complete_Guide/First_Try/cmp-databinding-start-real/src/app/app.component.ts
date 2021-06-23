import { Component } from '@angular/core';
import { ServerComponent } from '../../../first-angular-project/src/app/server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-start-real';

  ServerElements = [{type: 'sever', name: 'Testserver', content: 'Just a Test'}];

  onAddServer(serverData: {serverName: string, severContent: string}) {
    this.ServerElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.ServerElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: bluepringData.serverContent
    });
  }

}
