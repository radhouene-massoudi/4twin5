import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
niveau='4twin6';
color="pink";
  constructor() { }

  ngOnInit(): void {
  }
getMsg(){
  console.log("my msg");
}
}
