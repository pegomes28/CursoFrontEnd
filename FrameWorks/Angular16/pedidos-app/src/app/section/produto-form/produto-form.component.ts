import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent {
  nome: string = '';
  preco: number = 0;

  constructor(private dadosServices: DadosService) {}

  //método
  salvarProduto() {
    const produto = new Produto(
      this.dadosServices.getProdutos().length + 1,
      this.nome,
      this.preco
    );
    this.dadosServices.addProduto(produto);
    this.nome = '';
    this.preco = 0;
  }
}
