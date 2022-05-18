import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {ProduitBioComponent} from './module/client/view/produit-bio/produit-bio.component';
import {FormationComponent} from "./module/client/view/formation/formation.component";
import {CongresComponent} from "./module/client/view/congres/congres.component";
import {AuthGuard} from './controller/guards/auth.guard';
import {AccessDeniedComponent} from './auth/access-denied/access-denied.component';
import {PanierComponent} from "./module/client/view/panier/panier.component";
import {OverseaseducationComponent} from "./module/client/view/overseaseducation/overseaseducation.component";
import {CheckoutComponent} from "./module/client/view/checkout/checkout.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
        [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home',             component: ComponentsComponent },
            { path: 'login',             component: LoginPageComponent },
            { path: 'formation',          component: FormationComponent },
            { path: 'register',          component: RegisterComponent },
            { path: 'congres',          component: CongresComponent },
            { path: 'produitbio',          component: ProduitBioComponent },
            { path: 'panier',          component: PanierComponent },
            { path: 'overseaseducation',          component: OverseaseducationComponent },
            { path: 'checkout',          component: CheckoutComponent },
            // {
            //     path: 'app', // '\'' + root + '\'',
            //     // component: M,
            //     children: [
            //         {
            //             path: 'admin',
            //             loadChildren: './module/admin/admin-routing.module#AdminRoutingModule',
            //             canActivate: [AuthGuard],
            //         },
            //         {
            //             path: 'agent',
            //             loadChildren: './module/agent/agent-routing.module#AgentRoutingModule',
            //             canActivate: [AuthGuard],
            //         },{
            //             path: 'client',
            //             loadChildren: './module/client/client-routing.module#ClientRoutingModule',
            //             canActivate: [AuthGuard],
            //         },
            //         { path: 'denied', component: AccessDeniedComponent },
            //     ],
            //     canActivate: [AuthGuard]
            // },
        ],
        { scrollPositionRestoration: 'enabled' }
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
