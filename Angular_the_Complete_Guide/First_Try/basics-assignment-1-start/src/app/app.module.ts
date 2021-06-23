import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './Success_Alert/Success_Alert.component';
import { WaringAlertComponent } from './Warning_Alert/Warning_Alert.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WaringAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
