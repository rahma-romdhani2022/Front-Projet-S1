import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeContactService } from 'src/app/services/type-contact.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  msg : string 

  constructor(private service :TypeContactService  , private ar:ActivatedRoute , private router : Router){ }
  ngOnInit() {
  }
  addType(ft:NgForm){
    this.service.addType(ft.value).subscribe(()=>{
      this.router.navigate(['/listTypes'])
    },err=>{

   this.msg="Cette categorie de contact est déjà utilisé  !!?"})
  
  }

}
