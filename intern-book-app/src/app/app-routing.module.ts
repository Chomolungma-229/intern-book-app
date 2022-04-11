import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


const routes : Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }
