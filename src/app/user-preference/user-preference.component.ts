import { Component, OnInit } from '@angular/core';
import * as data from '../config/user-preference.json';

@Component({
  selector: 'app-user-preference',
  templateUrl: './user-preference.component.html',
  styleUrls: ['./user-preference.component.scss']
})
export class UserPreferenceComponent implements OnInit {
  dataMaps = new Map();

  constructor() { }

  ngOnInit(): void {
    const colorJson = (<any>data).color;
    const fontJson = (<any>data).font;
    let dataMap = new Map();

    Object.keys(colorJson).forEach(function(key) {
      console.table('Key : ' + key + ', Value : ' + colorJson[key])
      dataMap.set(key, localStorage.getItem(key));
    });
    Object.keys(fontJson).forEach(function(key) {
      console.table('Key : ' + key + ', Value : ' + fontJson[key])
      dataMap.set(key, localStorage.getItem(key));
    });
    console.log(dataMap);
    this.dataMaps = dataMap;
  }

  updateValue(key, value) {
    this.dataMaps.set(key, value);
    localStorage.setItem(key, value);
  }

}
