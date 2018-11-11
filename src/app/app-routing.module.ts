import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: '', component: NavbarComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'proyects', component: ProyectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'courses', component: CoursesComponent}
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
