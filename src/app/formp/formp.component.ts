import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formp',
  templateUrl: './formp.component.html',
  styleUrls: ['./formp.component.css']
})
export class FormpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showForm(f:any){

    console.log(f);
  }
}
