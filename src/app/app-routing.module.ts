import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { FacaSeuPedidoComponent } from './faca-seu-pedido/faca-seu-pedido.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:"cardapio", component:CardapioComponent},
  {path:"carrossel", component:CarrosselComponent},
  {path:"pedido", component:FacaSeuPedidoComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"sobre", component:SobreNosComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
