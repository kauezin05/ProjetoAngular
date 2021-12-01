import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  codigoRMA : number = 57378  ;
  nome : string = "Kauê Alexandre de Oliveira" ;
  nota1 : number = 10;
  nota2 : number = 7;
  nota3 : number = 0;
  nota4 : number = 10;
  media : number = ((this.nota1 + this.nota2 + this.nota3 + this.nota4)/4)  ;
  FotoVerde : string = 'assets/img/Foto_calculadoraVerde.png';
  FotoVermelha : string = 'assets/img/Foto_calculadoraVermelha.png';
  data : string ='2021-10-11';

constructor()
{

}

  title = 'calculoMedia';
}
