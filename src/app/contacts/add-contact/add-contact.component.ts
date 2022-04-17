import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { nextTick } from 'process';
import { Contact } from 'src/app/modele/contact';
import { ContactService } from 'src/app/services/contact.service';
import { TypeContact } from 'src/app/services/type-contact';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  nomType : string 
valeur :string 
  mode : number=1
  contact:Contact
  contactf : Contact
  userFile ; 
  imgURL : any ; 
  Restype : TypeContact
  types : TypeContact[]
  public imagePath ;
  public message : string ;
  constructor(private service :ContactService  , private s : TypeContactService ,  private ar:ActivatedRoute , private router : Router){ }

  ngOnInit() {
    
    this.s.getAllTypes().subscribe(data=>{
       this.types=data
    })
  } 
  
    ajouterContact(value){
   // const formData = new FormData();
   // const contact = f.value ;
   // formData.append('contact' , JSON.stringify(contact))
    //formData.append('file' , this.userFile)
    
    this.s.getTypeById(value.type).subscribe(data=>{
      this.Restype=data
       console.log( this.Restype)}) ;
      this.s.getNomType(value.type).subscribe(data=>{
        this.nomType=data
         console.log( this.nomType)}) ;
       value ={
        "nom" :value.nom ,
        "prenom" :value.prenom ,
        "adresse" :value.adresse ,
        "tel" :value.tel ,
        "email" :value.email,
        "type" : {"id":value.type ,
                   "nom" :this.nomType}
        
    }  

      this.service.addContact(value).subscribe(()=>{
        this.router.navigate(['/ListeContacts'])
    } , err=>{
      console.log(err);
      alert(" ce Contact est deja existe \n email ou numero de telephone sont déjà utilises "); 
      })
    
    }
    transfert(){
        this.router.navigate(['/addType'])
    }
  /* == test(){
      this.mode=2
      this.service.addContact(f.value).subscribe(()data=>{
        contact=data
      });
    }*/
    onSelectFile(event){
      if(event.target.files.length>0){
        const file = event.target.files[0] ;
        this.userFile = file ;

        var mimeType = event.target.files[0].type;
        if(mimeType.match(/image\/*/) == null){
          this.message = "Only images are supported." ;
          return ;
        }
        var reader = new FileReader() ;
        this.imagePath = file ;
        reader.readAsDataURL(file) ;
        reader.onload =(_event)=>{
          this.imgURL =reader.result ;
                }
      }
    }
  }
  