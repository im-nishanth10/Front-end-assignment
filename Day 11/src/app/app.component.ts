import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  numbers = [1,2,3,4,5];
  show=false;
  show2="3";
  color="grey";
  start=Date.now();
}
