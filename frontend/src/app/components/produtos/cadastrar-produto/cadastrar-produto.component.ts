import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  //Objeto.atributo




  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema', //titulo
        `${this.produto.nome} foi cadastrado com sucesso, ID: ${this.produto.id}`, //mensagem
        'toast-success' //tipo
      );
    });
   /* console.log('Nome: ',this.produto.nome);
    console.log('Validade: ',this.produto.validade);
    console.log('Preço: ',this.produto.precoProduto);
    alert('Salvo com sucesso!');*/
  }

}
