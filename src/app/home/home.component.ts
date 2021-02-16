import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as data from '../config/user-preference.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors: any;
  fonts: any;

  constructor(private appService: AppService){};

  ngOnInit(): void {
    this.colors = this.appService.getColors();
    this.fonts = this.appService.getFonts();
    console.log(this.fonts)
  }
}
