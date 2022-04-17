import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { nextTick } from 'process';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';
import { TypeContact } from 'src/app/services/type-contact';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
id : number ;
table:TypeContact[]
contact : Contact
  constructor(private service :ContactService  , private ar:ActivatedRoute , private s : TypeContactService , private router : Router){ }
  ngOnInit() {
    this.s.getAllTypes().subscribe(data=>{
      this.table=data
      console.log(this.table)
  }) ;
    this.ar.paramMap.subscribe((params)=>{
      this.id=+params.get('id')
      console.log("id ="+this.id);
      this.service.getContactById(this.id).subscribe(( data)=>{
       this.contact = data; 
       console.log(this.contact)}) ;
      });
 
}
  modifierContact(f : NgForm){
      this.service.updateContact(this.id , this.contact).subscribe(()=>{
        this.router.navigate(['/ListeContacts'])
        alert("Mise a Jour avec effectuée") ; 
      } , err=>{
        alert("Opps il y 'a un Probleme , email ou telephone existent deja ")
      })
    }
    transfert(){
      this.router.navigate(['/addType'])
  }
}
