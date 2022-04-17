import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent implements OnInit {
liste :Contact[]

id : number 
contact : Contact
  constructor(private service :ContactService , private ar :ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllContacts().subscribe(data=>{
      this.liste=data;
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
      //console.log (""+this.id+"") ;
      this.service.getContactById(this.id).subscribe(data =>{
        this.contact=  data;

      })
    //        this.contact=  this.liste.find(elt=>(elt.id==this.id));

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

}
