import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutosComponent } from './components/adicionar-produtos/adicionar-produtos.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: 'novo', component: AdicionarProdutosComponent },
  { path: 'lista', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
