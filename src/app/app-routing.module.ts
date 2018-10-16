import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'proyects', component: ProyectsComponent},
  {path: 'skills', component: SkillsComponent},
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
