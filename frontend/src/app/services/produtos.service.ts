import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

//Injeção de dependencia
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';



  constructor(private http: HttpClient, private toastr: ToastrService)/*metodo com classe http que usa o HttpClient*/ { }

  //metodo(tipo) : retorno{codigo}
  buscarTodos() : Observable<IProduto[]> { //Método
    //pipe :  juntas os metodos
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    ); // O http recebe a URL = 'http://localhost:3000/produtos'

  }

  cadastrar( produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  //Observable: ele vai ficar observando toda hora para ver se aconteceu alguma mudança
  exibirErro(e: any) : Observable<any> {

    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY; //retornar nada (essa função serve para ultilizar o Observable, pois quando não é void ele precisa que retorne algo)
  }
  exibirMensagem(titulo: string, mensagem: string, tipo: string) : void {

    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
    //No toastr será exibido mensagem, titulo, botão para fechar, barra com tempo de vizualização e o tipo
  }

}
