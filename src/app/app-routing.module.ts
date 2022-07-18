import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';



const routes: Routes = [
  {path:"", redirectTo:"pagina-principal", pathMatch:"full"},
  {path:"navbar", component:NavbarComponent},
  {path:"pagina-principal", component:PaginaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
