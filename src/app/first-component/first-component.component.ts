import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  encapsulation : ViewEncapsulation.Native
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}