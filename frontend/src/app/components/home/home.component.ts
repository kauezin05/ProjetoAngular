import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "Cursos de Angular";//NOME : TIPO = CONTEUDO
  anuncio: string = `O ${this.nomeProduto} está em promoção!`; // esse tipo de váriavel se chama string template
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  datavalidade : string ='2021-12-31'


  ListaProdutos: any[] = [
    {id: 2, nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31'},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 56, validade: '2021-12-28'},
    {id: 4, nome: 'Curso de Angular Avançado', precoProduto: 43, validade: '2021-12-28'},
    {id: 5, nome: 'Curso de C#', precoProduto: 58, validade: '2021-12-25'},
    {id: 6, nome: 'Curso de Android', precoProduto: 70, validade: '2022-01-03'},
  ]

  constructor() {
    // variáveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção'; //apóstrofe

    console.log('Nome do produto', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

   /* var idade = 10;
    console.log('Minha idade: ', idade);

    //var dexa alterar a mesma váriavel, mas o let e o const não

    let idade = 10;
    console.log('Minha idade: ', idade);*/

   /* let variavel = 0;
    let variavel = 10;
    console.log('variável', variavel);
    function funcao() {
      let outra_variavel = 20;
      let outra_variavel = 30;
      console.log('outra variável:', outra_variavel);
    }
    funcao();*/

   /* let a = 1;
    function bar() {
      console.log('Variável a :', a);
      let b = 2;
      if(true) {
        let c = 3;
        let a = 4;
        console.log('Variável a dentro da if', a);
        console.log('Variável b dentro da if', b);
        console.log('Variável c dentro da if', c);
      }
      console.log('Variável a fora do if', a);
      console.log('Variável b fora do if', b);
      //console.log(c);
    }
    bar();*/

   /* var a = 5;
    var b = 10;

      if(a = 5) {
        let a = 4;
        let b = 1;
        console.log('Variável a dentro da if', a);
        console.log('Variável b dentro da if', b);
      }
      console.log('Variável a fora do if', a);
      console.log('Variável b fora do if', b);*/







  }

  ngOnInit(): void {
  }

}
