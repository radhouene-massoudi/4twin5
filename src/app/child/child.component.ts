import { User } from './../model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() user!:User;
@Output() notif= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
sendData(){
  this.notif.emit(this.user);
}
}
