import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public alphaValue: number = 0;
  private timeoutid: any;

  public PlayFart() {

    let audio = new Audio();
    let randnum: number = this.getRandomInt(1, 7)
    audio.src = "/FartButton/assets/farts/fart" + randnum + ".ogg";
    audio.load();
    audio.play();

    this.alphaValue = this.alphaValue + 5;
    if (this.timeoutid) {
      clearTimeout(this.timeoutid);
    }
    this.timeoutid = setTimeout(() => {
      this.alphaValue = 0;
    }, 2000);

  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
