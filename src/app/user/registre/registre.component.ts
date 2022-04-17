import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
msg : string ;
  constructor(private service :UserService, private ar:ActivatedRoute , private router : Router){ }

  ngOnInit() {
  }
  registre(fr:NgForm){
    this.service.registreUser(fr.value).subscribe(data=>{
      console.log("okkkk")
      this.router.navigate(['/login'])} 
  ,err=>{
    //alert("Ce compte existe deja  !!?")
  this.msg="Ce email est déjà utilisé  !!?"})


 }
 route(){
  this.router.navigate(['/login'])
 }
}