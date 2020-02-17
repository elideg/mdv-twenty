import { FruitsItemComponent } from './fruits/fruits-item/fruits-item.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LoginComponent } from '@mdv-twenty/ui-lib';
import { WildComponent } from '@mdv-twenty/ui-lib';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'fruits', children: [
    { path: '', component: FruitsComponent },
    { path: ':id', component: FruitsItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
