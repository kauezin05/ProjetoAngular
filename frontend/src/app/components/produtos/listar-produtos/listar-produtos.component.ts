import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  /*listaStrings: string[] = ['Primeiro','Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Kauê',
    idade: 16,
    altura: 1.70,
    graduado: false
  };*/

  //Exemplo de ARRAY:
 /* listarProdutos: any[] = [
    {id: 1, nome: 'Curso Angular', precoProduto: 35.56, validade: '2021-12-31'},
    {id: 2, nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31'},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 56, validade: '2021-12-28'},
    {id: 4, nome: 'Curso de Angular Avançado', precoProduto: 43, validade: '2021-12-28'},
    {id: 5, nome: 'Curso de C#', precoProduto: 58, validade: '2021-12-25'},
    {id: 6, nome: 'Curso de Android', precoProduto: 70, validade: '2022-01-03'},
  ];*/

  listarProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {
   /* for (let item of this.listaStrings){
      console.log(item);
    }*/

    //for (const item of this.listaNumeros)/*variavel const é imutavel durante a operação*/{
    //console.log(item);
   // }

    /*
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);*/

  }
  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listarProdutos = retorno;
    })
  };

  //é preciso de ! depois do id, pois o id pode ser null
  deletar(produto: IProduto) : void {

    this.produtosService.excluir(produto.id!).subscribe(() => {

      this.produtosService.exibirMensagem(

        'Sistema',

        `${produto.nome} foi excluido com sucesso.`,

        'toast-success'

      );
      this.carregarProdutos();
    });
  };

}
