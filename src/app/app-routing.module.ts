import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./vistas/home/home.component";
import { ReposteriaComponent } from "./vistas/reposteria/reposteria.component";

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reposteria', component: ReposteriaComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [
    RouterModule.forRoot( routes )
 ],
 exports: [
     RouterModule
 ]

})

export class AppRoutingModule {}