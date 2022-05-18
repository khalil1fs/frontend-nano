// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import {FormationAdminComponent} from './view/formation-admin/formation-admin.component';
import {FormationAddComponent} from './view/formation-admin/formation-add/formation-add.component';
import {FormationEditComponent} from './view/formation-admin/formation-edit/formation-edit.component';
import {FormationViewComponent} from './view/formation-admin/formation-view/formation-view.component';
// import { FormationListComponent } from './view/formation-admin/formation-list/formation-list.component';
import {CongresAdminComponent} from './view/congres-admin/congres-admin.component';
import {CongresAddComponent} from './view/congres-admin/congres-add/congres-add.component';
import {CongresEditComponent} from './view/congres-admin/congres-edit/congres-edit.component';
import {CongresViewComponent} from './view/congres-admin/congres-view/congres-view.component';
// import { CongresListComponent } from './view/congres-admin/congres-list/congres-list.component';
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
    declarations: [FormationAdminComponent, FormationAddComponent, FormationEditComponent, FormationViewComponent, FormationListComponent, CongresAdminComponent, CongresAddComponent, CongresEditComponent, CongresViewComponent, CongresListComponent, ProduitBioAdminComponent, ProduitBioAddComponent, ProduitBioEditComponent, ProduitBioViewComponent, ProduitBioListComponent, GerantAdminComponent, GerantAddComponent, GerantEditComponent, GerantViewComponent, GerantListComponent, CommandeAdminComponent, CommandeListComponent, CommandeViewComponent, CommandeEditComponent],
})
export class AdminRoutingModule {
}
