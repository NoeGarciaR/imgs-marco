import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  { path: '' , component: ImagesComponent},
  { path: '**', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
