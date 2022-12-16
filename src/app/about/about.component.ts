import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about : string = "This is About"

  data = [
    {
      id : 1,
      name  : 'This is 1'
    },
    {
      id : 2,
      name  : 'This is 2'
    },
    {
      id : 3,
      name  : 'This is 3'
    }
  ]


  constructor() { 

  }

  ngOnInit(): void {
   
  }

  clickFunction(value : string){
    this.about = "Button Click!"
    alert(value)
  }



}
