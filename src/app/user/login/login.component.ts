import { Component, ElementRef, OnInit, ViewChild, ɵɵpureFunction1 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modele/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg=""  ;
invalidLogin = false
utilisateur : User ; 
  constructor(private service :UserService, private ar:ActivatedRoute, private router : Router){ }

  ngOnInit() {
  }
  login(fl:NgForm){
this.service.loginUser(fl.value).subscribe(data=>{
  console.log("okkkk")
  console.log(fl.value.email)
  this.invalidLogin = false
 // this.utilisateur ={"id":}
  this.router.navigate(['/ListeContacts']) 

console.log( this.invalidLogin)

 }
  ,err=>{

  this.msg="email ou mot de passe est invalide !!?"})
  this.invalidLogin = true
  }

  
  route(){
    this.router.navigate(['/registre'])
  }

}
