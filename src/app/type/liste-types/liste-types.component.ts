import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeContact } from 'src/app/modele/TypeConatct';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent implements OnInit {

  liste :TypeContact[]
  id : number 
   contact : TypeContact
  constructor(private service :TypeContactService, private ar :ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllTypes().subscribe(data=>{
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
  let confirm = window.confirm("Est vous sùre de supprimer cette categorie  !!?") ; 
  if (confirm==true){
    this.service.deleteType(id).subscribe(()=>{this.getAllPContact()
    console.log("ok")
    }
    );    
  }
  }
  getAllPContact(){
    this.service.getAllTypes().subscribe(data=>{
      this.liste=data;
    });
  }

}

