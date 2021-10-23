import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/root/iam',
    pathMatch: 'full'
  },
  {
    path: 'root',
    component: LayoutComponent,
    children: [
      {
        path: 'iam',
        loadChildren: () => import('./view/view.module').then(module => module.ViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
