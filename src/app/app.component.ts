import { Component } from '@angular/core';
import {StoreTestService} from "./store-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clicker = (item) => {
    console.log(item);
  }

  forHeader() {
    return this.service.forHeader;
  }

  forFooter() {
    return this.service.forFooter;
  }

  forWelcome() {
    return this.service.forWelcome;
  }

  title = 'Page';

  prefix: any;
  pathToAssets = 'http://cdn.ramman.net/flexy-view/islam/visit/1.01/assets/';

  constructor(private service: StoreTestService) {
  }
}
