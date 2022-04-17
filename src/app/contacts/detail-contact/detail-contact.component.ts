import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
  liste :Contact[]
  id : number 
  contact : Contact
  url="http://localhost:8080/contact/getImage/" ;
  constructor(private service :ContactService, private ar :ActivatedRoute , private route :Router ) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
      this.service.getContactById(this.id).subscribe(data=>{
      this.contact=data;});

});
}
retour(){
this.route.navigate(['/ListeContacts']) ;
}
supprimer(id :number){
  let confirm = window.confirm("Est vous sùre de supprimer  ce contact  definiivement !!?") ; 
  
  if (confirm==true){
    this.service.deleteContact(id).subscribe(()=>{
    console.log("ok")
    }
    );    
  }
  }
}