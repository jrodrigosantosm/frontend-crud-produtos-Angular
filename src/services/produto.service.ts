import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Produto } from "src/models/produto.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService{

  private url =environment.api;

  constructor(private http: HttpClient){}


listaProdutos(){
  return this.http.get<Produto[]>(`${this.url}`)
}


adicionarProduto(novoProduto: Produto): Observable<Produto> {
  return this.http.post<Produto>('${url}', novoProduto,)
}

}
