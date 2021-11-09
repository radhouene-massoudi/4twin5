import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.service.firstmethode();
    //this.service.
  }

}
