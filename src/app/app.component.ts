import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  increment = 1;
  buttonClicks = [];

  onDisplayPassword = () => {
    this.buttonClicks.push(this.increment);
    this.increment += 1;
    if (this.showPassword){
      this.showPassword = false;
    } else {
      this.showPassword = true;
    }
  }
}
