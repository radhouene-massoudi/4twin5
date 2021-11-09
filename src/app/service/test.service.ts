import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  firstmethode(){
    console.log('bonjour');
  }
  sshowmsg(){
    return 'bonjour show msg';
  }
}
