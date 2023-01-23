import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterparent',
  templateUrl: './counterparent.component.html',
  styleUrls: ['./counterparent.component.css']
})
export class CounterparentComponent implements OnInit {
  Counte = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
