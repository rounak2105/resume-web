import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-web';
  topRes = 10;
  leftRes = 10;
  isDivVisible = false;
  isExpVisible = false;

  mouseLeft(event) {
    this.topRes = event.clientX;
    this.leftRes = event.clientY;
  }

  menuVisible() {
    if(this.isDivVisible)
      this.isDivVisible = false;
    else
      this.isDivVisible = true;
  }

  expVisible() {
    if(this.isExpVisible)
      this.isExpVisible = false;
    else
      this.isExpVisible = true;
  }

}
