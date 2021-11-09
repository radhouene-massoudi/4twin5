import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivef',
  templateUrl: './reactivef.component.html',
  styleUrls: ['./reactivef.component.css']
})
export class ReactivefComponent implements OnInit {
name= new FormControl('',[Validators.required,Validators.minLength(2)]);
lastname= new FormControl('',Validators.required);

formgroup= new FormGroup({
  cin: new FormControl('',[Validators.required]),
  adresse: new FormControl('',[Validators.required, Validators.email]),
  
});
fbf:any;
  constructor( private fb:FormBuilder) { 
    this.fbf=this.fb.group({
      age: ['',Validators.required],
      domaine: ['',[Validators.required,Validators.minLength(6)]],
      cours: this.fb.array([
        new FormControl('angular'),//index=0
        new FormControl('react'),//index=1
      ])
    });
  }

  ngOnInit(): void {
    
  }
get cin1(){
  return this.formgroup.get('cin')
}
get adr(){
  return this.formgroup.get('adresse')
}
get cours(){
  return this.fbf.get('cours') as FormArray
}
showForm(formgroup:any){
console.log(formgroup);
}

addcours(){
  this.cours.push(this.fb.control(''))
}
delete(i:any){
  this.cours.removeAt(i);
}
}
