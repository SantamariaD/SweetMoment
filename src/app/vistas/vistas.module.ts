import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReposteriaComponent } from './reposteria/reposteria.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReposteriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VistasModule { }
