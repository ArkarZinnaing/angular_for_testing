import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    {
      id : 1,
      name  : 'This is A'
    },
    {
      id : 2,
      name  : 'This is B'
    },
    {
      id : 3,
      name  : 'This is C'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
