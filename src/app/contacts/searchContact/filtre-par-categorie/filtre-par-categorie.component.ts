import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';
import { TypeContact } from 'src/app/services/type-contact';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-filtre-par-categorie',
  templateUrl: './filtre-par-categorie.component.html',
  styleUrls: ['./filtre-par-categorie.component.css']
})
export class FiltreParCategorieComponent implements OnInit {
 liste : Contact[]
 listes : Contact[]
 types : TypeContact[]
 id : number
 contact : Contact
    constructor(private service :ContactService , private s : TypeContactService,  private ar:ActivatedRoute , private router : Router){ }
  
    ngOnInit() {
      this.service.getAllContacts().subscribe(data=>{
        this.liste=data;
    
      this.ar.paramMap.subscribe((x)=>{
        this.id =+ x.get('id');
       this.contact=  this.liste.find(elt=>(elt.id==this.id));
    }) ; 
      });
      this.s.getAllTypes().subscribe(data=>{
        this.types=data
     })
    }
    
   onChangeSelect(f : NgForm) {
      this.service.getContactByNomType(f.value.id).subscribe(data =>{
        this.liste=data ;
      })
      console.log(f.value.id)
    }
     /*filtrage(value){
 
      this.service.getAllContacts().subscribe(data=>{
        this.liste=data;})
   this.listes= this.filtrer(value.id)}
 
filtrer(sousChaine:string){
  this.service.getAllContacts().subscribe(data=>{
    this.liste=data;})
  return this.liste.filter((liste)=>liste.type.id.indexOf(sousChaine)!=-1)

 console.log(this.listes)    
}     */
    }
   