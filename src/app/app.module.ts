import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ListeContactComponent } from './contacts/liste-contact/liste-contact.component';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule} from'@angular/common/http';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
import { SearchContactComponent } from './contacts/searchContact/search-contact/search-contact.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './User/login/login.component';
import { RegistreComponent } from './User/registre/registre.component';
import { MenuComponent } from './menu/menu.component';
import { ImageComponent } from './image/image.component';
import { TypeComponent } from './type/type.component';
import { ListeTypesComponent } from './type/liste-types/liste-types.component';
import { UpdateComponent } from './type/update/update.component';
import { DetailComponent } from './type/detail/detail.component';
import { AddTypeComponent } from './type/add-type/add-type.component';
import { UserService } from './services/user.service';
import { filter } from 'rxjs/operators';
import { SerachParPrenomComponent } from './contacts/searchContact/serach-par-prenom/serach-par-prenom.component';
import { SerachParAdresseComponent } from './contacts/searchContact/serach-par-adresse/serach-par-adresse.component';
import { FiltreParCategorieComponent } from './contacts/searchContact/filtre-par-categorie/filtre-par-categorie.component';
import { LogoutComponent } from './user/logout/logout.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
   ContactsComponent,
    AddContactComponent,
    UpdateContactComponent,
    ListeContactComponent,
    DetailContactComponent,
    PageNotFoundComponent,
    SearchContactComponent,
    UserComponent,
    LoginComponent,
    RegistreComponent,
    MenuComponent,
    ImageComponent,
    TypeComponent,
    ListeTypesComponent,
    UpdateComponent,
    DetailComponent,
    AddTypeComponent,
    SerachParPrenomComponent,
    SerachParAdresseComponent,
    FiltreParCategorieComponent,
    LogoutComponent
    //MatInputModule,
    //MatFormFieldModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NgModel , 
    HttpClientModule
    
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
