import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid',
    loadChildren: ()=>import('./grid/grid-routing.module').then((m) => m.GridRoutingModule)
  },
  {
    path: 'forms',
    loadChildren: ()=>import('./forms/forms-routing.module').then((m)=>m.formsRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
