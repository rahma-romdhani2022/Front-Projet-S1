import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeContact } from 'src/app/modele/TypeConatct';
import { ContactService } from 'src/app/services/contact.service';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  lista :TypeContact[]
  id : number 
  nom : string
  typeContact : TypeContact
  constructor(private service :TypeContactService,  private s : ContactService , private ar :ActivatedRoute , private route :Router ) { }

  ngOnInit() {
   this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
      this.service.getTypeById(this.id).subscribe(data=>{
      this.typeContact=data;});
  //console.log(this.typeContact.nom) ;
     // console.log(this.nom) ;
      this.s.getContactByNomType(this.id).subscribe(resultat=>{
           this.lista=resultat ;
      })
});

}
retour(){
this.route.navigate(['/listeTypes']) ;
}
}