import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}