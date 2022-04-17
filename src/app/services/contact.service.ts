import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../modele/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
 //host ="http://localhost:3000/contacts/"
  host ="http://localhost:8080/contact/"
 //host1 ="http://localhost:8080/api/produit/"
 
     constructor(private client:HttpClient) { }
 
     public getAllContacts():Observable<Contact[]>{
       return this.client.get<Contact[]>(this.host+"all");
     }
     public getContactById(id):Observable<Contact>{
       return this.client.get<Contact>(this.host+id);
     }
     public deleteContact(id):Observable<void>{
       return this.client.delete<void>(this.host+"delete/"+id);
     }
     public addContact(contact:Contact/*formData :FormData*/):Observable<void>
   {
   return this.client.post<void>(this.host+"add",contact);
   }
   public updateContact(id , contact :Contact):Observable<void>
   {
     return this.client.put<void>(this.host+"update/"+id,contact);}

     
     public getContactByNomType(id):Observable<Contact[]>{
      return this.client.get<Contact[]>("http://localhost:8080/contact/types?id="+id);
    }
    public rechercheParNom(nom : string):Observable<Contact[]>{
      return this.client.get<Contact[]>(this.host+"searchN/"+nom);
    }
    public rechercheParPrenom(prenom : string):Observable<Contact[]>{
      return this.client.get<Contact[]>(this.host+"searchN/"+prenom);
    }
     }
   