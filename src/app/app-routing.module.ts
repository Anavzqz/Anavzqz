import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: WallComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
