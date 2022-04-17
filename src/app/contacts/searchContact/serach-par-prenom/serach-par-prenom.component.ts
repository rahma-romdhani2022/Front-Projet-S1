import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-serach-par-prenom',
  templateUrl: './serach-par-prenom.component.html',
  styleUrls: ['./serach-par-prenom.component.css']
})
export class SerachParPrenomComponent implements OnInit {

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
   
   

rechercheP(){

this.service.getAllContacts().subscribe(data=>{
this.liste=data;})
this.listess= this.filtrerP(this.searche)}

filtrerP(sousChaine:string){
this.service.getAllContacts().subscribe(data=>{
this.liste=data;})
return this.liste.filter((liste)=>
liste.prenom.toLowerCase().includes(this.searche.toLowerCase()))

console.log(this.listes)    
}     
/*onTapeKeyword (f : NgForm){
 
this.service.rechercheParPrenom(f.value.keyword).subscribe(data =>{
    this.liste=data ;
    console.log(f.value.keyword);
    
  },error=>{
    console.log(error);
  })
}*/




}


