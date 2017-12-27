import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
//carousel angular
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Dropdows 
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { DamasComponent } from './damas/damas.component';
import { CaballerosComponent } from './caballeros/caballeros.component';
import { InfantilesComponent } from './infantiles/infantiles.component';


const appRoutes: Routes=[
  {path: 'index', component: IndexComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'loginmodal', component:LoginModalComponent},
  {path: 'viewmore', component:ViewmoreComponent},
  {path: 'caballeros', component:CaballerosComponent},
  {path: 'damas', component:DamasComponent},
  {path: 'infantiles', component:InfantilesComponent},
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactoComponent,
    PagenotfoundComponent,
    LoginModalComponent,
    ViewmoreComponent,
    DamasComponent,
    CaballerosComponent,
    InfantilesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


