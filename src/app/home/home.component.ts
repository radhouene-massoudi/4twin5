import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
niveau="4twin6";
color='red';
  constructor() {
    console.log('1');
  }

  ngOnInit(): void {
    console.log('2');
  }
showMsg(){
  console.log("bonjour twin6");
}
}
