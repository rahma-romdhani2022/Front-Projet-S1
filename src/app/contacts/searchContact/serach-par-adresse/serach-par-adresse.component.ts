import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-serach-par-adresse',
  templateUrl: './serach-par-adresse.component.html',
  styleUrls: ['./serach-par-adresse.component.css']
})
export class SerachParAdresseComponent implements OnInit {
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

}
