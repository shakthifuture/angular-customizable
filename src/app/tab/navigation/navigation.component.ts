import { Component, NgZone, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  menu: any;

  constructor(private router: Router, private appService: AppService, private ngZone: NgZone) {
    this.menu = this.appService.getMenuItems();
    console.log(this.menu)
  }
  ngOnInit(): void {
    console.log('trigger')
    this.router.navigateByUrl(`/${this.menu[0].path}`);
  }

  tabChange(evt: MatTabChangeEvent) {
    for(let obj of this.menu) {
      console.log('again');
      if(obj.label === evt.tab.textLabel) {
        console.log('path-> ', obj.path);
        this.ngZone.run(() => {
          this.router.navigate([`/${obj.path}`]);
        })
        
        break;
      }
    }
  }

}
