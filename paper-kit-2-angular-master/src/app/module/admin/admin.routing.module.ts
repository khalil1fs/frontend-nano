// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import {FormationAdminComponent} from './view/formation-admin/formation-admin.component';
import {FormationAddComponent} from './view/formation-admin/formation-add/formation-add.component';
import {FormationEditComponent} from './view/formation-admin/formation-edit/formation-edit.component';
import {FormationViewComponent} from './view/formation-admin/formation-view/formation-view.component';
import {CongresAdminComponent} from './view/congres-admin/congres-admin.component';
import {CongresAddComponent} from './view/congres-admin/congres-add/congres-add.component';
import {CongresEditComponent} from './view/congres-admin/congres-edit/congres-edit.component';
import {CongresViewComponent} from './view/congres-admin/congres-view/congres-view.component';
import {ProduitBioAdminComponent} from './view/produit-bio-admin/produit-bio-admin.component';
import {ProduitBioAddComponent} from './view/produit-bio-admin/produit-bio-add/produit-bio-add.component';
import {ProduitBioEditComponent} from './view/produit-bio-admin/produit-bio-edit/produit-bio-edit.component';
import {ProduitBioViewComponent} from './view/produit-bio-admin/produit-bio-view/produit-bio-view.component';
import {ProduitBioListComponent} from './view/produit-bio-admin/produit-bio-list/produit-bio-list.component';
import {GerantAdminComponent} from './view/gerant-admin/gerant-admin.component';
import {GerantAddComponent} from './view/gerant-admin/gerant-add/gerant-add.component';
import {GerantEditComponent} from './view/gerant-admin/gerant-edit/gerant-edit.component';
import {GerantViewComponent} from './view/gerant-admin/gerant-view/gerant-view.component';
import {GerantListComponent} from './view/gerant-admin/gerant-list/gerant-list.component';
import {CommandeAdminComponent} from './view/commande-admin/commande-admin.component';
import {CommandeListComponent} from './view/commande-admin/commande-list/commande-list.component';
import {CommandeViewComponent} from './view/commande-admin/commande-view/commande-view.component';
import {CommandeEditComponent} from './view/commande-admin/commande-edit/commande-edit.component';
import {FormationListComponent} from './view/formation-admin/formation-list/formation-list.component';
import {CongresListComponent} from './view/congres-admin/congres-list/congres-list.component';
import {UserAdminComponent} from './view/user-admin/user-admin.component';
import {UserViewComponent} from './view/user-admin/user-view/user-view.component';
import {UserListComponent} from './view/user-admin/user-list/user-list.component';
import {UserEditComponent} from './view/user-admin/user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'formation',
                            children: [
                                {
                                    path: 'add',
                                    component: FormationAddComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'edit',
                                    component: FormationEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: FormationListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: FormationViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'congres',
                            children: [
                                {
                                    path: 'add',
                                    component: CongresAddComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'edit',
                                    component: CongresEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: CongresListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: CongresViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'produit-bio',
                            children: [
                                {
                                    path: 'add',
                                    component: ProduitBioAddComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'edit',
                                    component: ProduitBioEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: ProduitBioListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: ProduitBioViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'gerant',
                            children: [
                                {
                                    path: 'add',
                                    component: GerantAddComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'edit',
                                    component: GerantEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: GerantListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: GerantViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'commande',
                            children: [
                                {
                                    path: 'edit',
                                    component: CommandeEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: CommandeListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: CommandeViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'paiment',
                            children: [
                                {
                                    path: 'edit',
                                    component: ProduitBioEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: ProduitBioListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: ProduitBioViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
                            path: 'user',
                            children: [
                                {
                                    path: 'edit',
                                    component: UserEditComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'list',
                                    component: UserListComponent,
                                    canActivate: [AuthGuard]
                                }, {
                                    path: 'view',
                                    component: UserViewComponent,
                                    canActivate: [AuthGuard]
                                },
                            ]
                        }, {
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
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    exports: [RouterModule],
    declarations: [FormationAdminComponent, FormationAddComponent, FormationEditComponent, FormationViewComponent, FormationListComponent, CongresAdminComponent, CongresAddComponent, CongresEditComponent, CongresViewComponent, CongresListComponent, ProduitBioAdminComponent, ProduitBioAddComponent, ProduitBioEditComponent, ProduitBioViewComponent, ProduitBioListComponent, GerantAdminComponent, GerantAddComponent, GerantEditComponent, GerantViewComponent, GerantListComponent, CommandeAdminComponent, CommandeListComponent, CommandeViewComponent, CommandeEditComponent, UserAdminComponent, UserViewComponent, UserListComponent, UserEditComponent],
})
export class AdminRoutingModule {
}
