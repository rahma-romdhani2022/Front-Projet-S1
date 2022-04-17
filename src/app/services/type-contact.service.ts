import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TypeContact } from '../modele/TypeConatct';

@Injectable({
  providedIn: 'root'
})
export class TypeContactService {

  constructor(private client:HttpClient) { }
  host ="http://localhost:8080/typeContact/"
  public getAllTypes():Observable<TypeContact[]>{
    return this.client.get<TypeContact[]>(this.host+"all");
  }
  public getTypeById(id : number):Observable<TypeContact>{
    return this.client.get<TypeContact>(this.host+id);
  }
  public deleteType(id):Observable<void>{
    return this.client.delete<void>(this.host+"delete/"+id);
  }
  public addType(type:TypeContact/*formData :FormData*/):Observable<void>
{
return this.client.post<void>(this.host+"add",type);
}
public update(id , type :TypeContact):Observable<void>
{
  return this.client.put<void>(this.host+"update/"+id,type);}
  public getNomType(id : number):Observable<string>{
    return this.client.get<string>("http://localhost:8080/typeContact/typec/"+id);
  }

  }

