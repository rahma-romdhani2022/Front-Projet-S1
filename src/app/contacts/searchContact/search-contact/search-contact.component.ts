import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
  liste :Contact[]
  listes :Contact[]
  listess :Contact[]
  id : number 
  searche=""
  contact : Contact
    constructor(private service :ContactService, private ar :ActivatedRoute) { }
  
  ngOnInit() {
    this.service.getAllContacts().subscribe(data=>{
      this.liste=data;
  
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
      //console.log (""+this.id+"") ;
     this.contact=  this.liste.find(elt=>(elt.id==this.id));
    //   console.log(this.contact.nom);
  }) ; 
    });
  }
 
 
  supprimer(id :number){
    let confirm = window.confirm("Est vous sùre de supprimer  ce contact  definiivement !!?") ; 
    
    if (confirm==true){
      this.service.deleteContact(id).subscribe(()=>{this.getAllPContact()
      console.log("ok")
      }
      );    
    }
    }
    getAllPContact(){
      this.service.getAllContacts().subscribe(data=>{
        this.liste=data;
      });
    }
   
    recherche(){
 
      this.service.getAllContacts().subscribe(data=>{
        this.liste=data;})
   this.listess= this.filtrer(this.searche)}
 
filtrer(sousChaine:string){
  this.service.getAllContacts().subscribe(data=>{
    this.liste=data;})
  return this.liste.filter((liste)=>
  liste.nom.toLowerCase().includes(this.searche.toLowerCase()))

 console.log(this.listes)    
}     

rechercheA(){
 
  this.service.getAllContacts().subscribe(data=>{
    this.liste=data;})
this.listess= this.filtrerA(this.searche)}

filtrerA(sousChaine:string){
this.service.getAllContacts().subscribe(data=>{
this.liste=data;})
return this.liste.filter((liste)=>
liste.adresse.toLowerCase().includes(this.searche.toLowerCase()))

console.log(this.listes)    
}     

rechercheP(){

this.service.getAllContacts().subscribe(data=>{
this.liste=data;})
this.listess= this.filtrerA(this.searche)}

filtrerP(sousChaine:string){
this.service.getAllContacts().subscribe(data=>{
this.liste=data;})
return this.liste.filter((liste)=>
liste.prenom.toLowerCase().includes(this.searche.toLowerCase()))

console.log(this.listes)    
}     




/*set v(a:string){
  this.liste=this.filtrerr(a);
}
filtrerr(contenu:string){
 return  this.liste.filter(x=>x.nom.indexOf(contenu)!=-1);
}*/
}
