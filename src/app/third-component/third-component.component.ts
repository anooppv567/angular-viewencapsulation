import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ThirdComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}