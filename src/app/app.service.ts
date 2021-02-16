import { Injectable } from '@angular/core';
import * as data from './config/user-preference.json';

@Injectable({ providedIn: 'root' })
export class AppService {

    getColors() {
        const json = (<any>data).color;
        let colorObject = {};
        Object.keys(json).forEach(function(key) {
            if(localStorage.getItem(key)===null || localStorage.getItem(key) === undefined) {
                localStorage.setItem(key, json[key]);
            }
            colorObject[key] = localStorage.getItem(key);
        });
        return colorObject;
    }

    getFonts() {
        const json = (<any>data).font;
        let fontObject = {};
        Object.keys(json).forEach(function(key) {
            if(localStorage.getItem(key)===null || localStorage.getItem(key) === undefined) {
                localStorage.setItem(key, json[key]);
            }
            fontObject[key] = localStorage.getItem(key);
        });
        return fontObject;
    }

    getMenuItems() {
        return (<any>data).menu.items;
    }

}