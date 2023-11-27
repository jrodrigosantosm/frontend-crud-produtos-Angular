import { Component } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { ProdutoService } from 'src/services/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  title = 'frontend';

  produtoslista: Produto[] = []

  constructor(private produtoService: ProdutoService){}

ngOnInit(): void {
  this.produtoService.listaProdutos().subscribe((data) => {
    this.produtoslista = data;
  });

}
}
