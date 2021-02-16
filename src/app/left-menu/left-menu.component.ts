import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  menuItems: any;
  tabs: any;
  navLinks = [
  //   {
  //     label: "First",
  //     path: "table"
  // },
  // {
  //     label: "Second",
  //     path: "home"
  // }
    { path: 'table', label: 'Menu' },
    { path: 'settings', label: 'Submenu' },
    // { path: 'host', label: 'Host' },
    // { path: 'action', label: 'Action' },
    // { path: 'environment', label: 'Environment' },
    // { path: 'auditLogs', label: 'AuditLogs' },
    // { path: 'permission', label: 'Permission'}
  ];

  constructor(private appService: AppService,
    private router: Router) {  }

  ngOnInit(): void {
    // this.menuItems = this.appService.getMenuItems();
    // this.tabs = Object.entries(this.menuItems);
    // console.log(this.menuItems);
    
  }

  // tabChange(evt: MatTabChangeEvent) {
  //   console.log(this.menuItems[evt.tab.textLabel]);
  //   this.router.navigateByUrl(`/${this.menuItems[evt.tab.textLabel]}`)
  // }

  navigate() {
    this.router.navigate(['left-menu/table']);
  }

}
