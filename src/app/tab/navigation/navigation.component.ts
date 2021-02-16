import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menu: any;

  constructor(private router: Router, private appService: AppService) {
    this.menu = this.appService.getMenuItems();
    console.log(this.menu)
    this.router.navigateByUrl(`/${this.menu[0].path}`);
  }

  tabChange(evt: MatTabChangeEvent) {
    for(let obj of this.menu) {
      if(obj.label === evt.tab.textLabel) {
        this.router.navigateByUrl(`/${obj.path}`);
      }
    }
  }

}
