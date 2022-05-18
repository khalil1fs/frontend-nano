
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import { PanierComponent } from './view/panier/panier.component';
import { CheckoutComponent } from './view/checkout/checkout.component';
import { OverseaseducationComponent } from './view/overseaseducation/overseaseducation.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    // component: ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    // component:  ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
    declarations: [PanierComponent, CheckoutComponent, OverseaseducationComponent],
})
export class ClientRoutingModule { }
