import { Component } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { ProdutoService } from 'src/services/produto.service';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent {
  novoProduto: Produto = {
    nome: '',
    categoria: '',
    valor: 0,
    dataVencimento: '',
    estoque: 0,
    perecivel: false,
  };
  constructor(private produtoservice: ProdutoService) {}
    adicionarProduto(): void {
  this.produtoservice.adicionarProduto(this.novoProduto).subscribe((produto) => {
        console.log('Novo produto adicionado:', produto);

      });
    }
  }
