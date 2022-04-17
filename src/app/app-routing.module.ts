import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { ListeContactComponent } from './contacts/liste-contact/liste-contact.component';
import { SearchContactComponent } from './contacts/searchContact/search-contact/search-contact.component';
import { FiltreParCategorieComponent } from './contacts/searchContact/filtre-par-categorie/filtre-par-categorie.component';
import { SerachParAdresseComponent } from './contacts/searchContact/serach-par-adresse/serach-par-adresse.component';
import { SerachParPrenomComponent } from './contacts/searchContact/serach-par-prenom/serach-par-prenom.component';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
import { ImageComponent } from './image/image.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGardService } from './services/auth-gard.service';
import { AddTypeComponent } from './type/add-type/add-type.component';
import { DetailComponent } from './type/detail/detail.component';
import { ListeTypesComponent } from './type/liste-types/liste-types.component';
import { UpdateComponent } from './type/update/update.component';
import { LoginComponent } from './User/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegistreComponent } from './User/registre/registre.component';
const routes: Routes = [
  {path:"Acceuil" , component:MenuComponent},
  {path:"image" , component:ImageComponent},
  {path:"Login" , component:ListeContactComponent },
  {path:"Ajouter Contact" , component:AddContactComponent  },
  {path:"addType" , component:  AddTypeComponent },
  {path:"ListeContacts" , component:ListeContactComponent} ,
  {path:"update/:id" , component:UpdateContactComponent },
  {path:"detailType/:id" , component:DetailComponent },
  {path:"detail/:id" , component:DetailContactComponent },
  {path:"updateType/:id" , component:UpdateComponent},
  {path:"listTypes" , component:ListeTypesComponent  },
  {path:"searchContact" , component:SearchContactComponent },
  {path:"login" , component:LoginComponent },
  {path:"logout" , component:LogoutComponent },
  {path:"registre" , component:RegistreComponent},
  {path:"rechP" , component:SerachParPrenomComponent },
  {path:"rechType" , component:FiltreParCategorieComponent },
  {path:"rechA" , component:SerachParAdresseComponent  },
  {path:"" , redirectTo:"/Acceuil",pathMatch:'full'},

  {path:"**" , component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
