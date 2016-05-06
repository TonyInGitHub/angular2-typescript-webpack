import {Component, OnInit, NgZone} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Subject, Observable}  from 'rxjs/Rx';
import {RouteConfig, Router} from '@angular/router-deprecated';


@Component({
  selector: 'my-app',
  providers: [],
  pipes: [],
  template: `<h1>My Angular 2 App</h1>
  <div *ngFor="let item of arr">
    {{item}}
  </div>
    `
})

export class App {
  arr: Array<number> = [4,5,6];
  constructor() {
    console.clear();
  }
}
