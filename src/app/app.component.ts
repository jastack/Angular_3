import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .aboveFive {
      color: white;
      border: 5 px solid red;
    }
  `]
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

  getColor(e) {
    return e >= 5 ? 'blue' : 'white';
  }
}
