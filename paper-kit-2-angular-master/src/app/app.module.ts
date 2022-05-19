import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { FormationComponent } from './module/client/view/formation/formation.component';
import { ProduitBioComponent } from './module/client/view/produit-bio/produit-bio.component';
import { CongresComponent } from './module/client/view/congres/congres.component';
import {HttpClientModule} from '@angular/common/http';
import {PanierComponent} from "./module/client/view/panier/panier.component";
// import { FormationAdminComponent } from './controller/module/admin/formation-admin/formation-admin.component';
import { PanierComponent } from './module/client/view/panier/panier.component';
import { CheckoutComponent } from './module/client/view/checkout/checkout.component';
import {CongresListComponent} from './module/admin/view/congres-admin/congres-list/congres-list.component';



@NgModule({
  declarations: [
    PanierComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterComponent,
    FormationComponent,
    ProduitBioComponent,
    CongresComponent,
      PanierComponent,
      CheckoutComponent,
    CongresListComponent,

    // FormationAdminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
