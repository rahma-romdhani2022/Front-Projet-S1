import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeContact } from 'src/app/modele/TypeConatct';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id : number 
type : TypeContact
msg : string 
  constructor(private service : TypeContactService , private router : Router , private ar : ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((params)=>{
      this.id=+params.get('id')
      console.log("id ="+this.id);
      console.log("okkk")
      this.service.getTypeById(this.id).subscribe(( data)=>{
       this.type = data; }) ;
  });
}
modifiertype(f : NgForm){
  this.service.update(this.id , this.type).subscribe(()=>{
    this.router.navigate(['/listTypes'])
    this.msg ="Mise a Jour avec effectuée" ; 
  } , err=>{
    this.msg = "Opps il y 'a un Probleme"
  })
}
}
