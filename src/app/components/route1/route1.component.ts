import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 4.6560663;
  lng: number = -74.0595918;
}
