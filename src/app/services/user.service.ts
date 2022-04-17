import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../modele/user';
import { Image } from '../modele/image';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  nom : string 
  constructor(private client:HttpClient , private _router :Router) { }

  public  loginUser( user :  User ):Observable<User>{
    this.nom = user.username
    sessionStorage.setItem('username', this.nom)
    return this.client.post<User>("http://localhost:8080/user/login" , user);
    
     
  }
  public registreUser(user : User) : Observable<void>{
    return this.client.post<void>("http://localhost:8080/user/registre", user)
  }

 
  isUserLoggedIn() {
    let userr = sessionStorage.getItem('username')
    console.log(!(userr === null))
    return !(userr === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}