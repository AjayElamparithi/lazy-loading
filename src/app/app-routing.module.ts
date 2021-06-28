import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(mod => mod.SignUpModule) },

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
