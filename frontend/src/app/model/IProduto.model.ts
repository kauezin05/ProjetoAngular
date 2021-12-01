//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IProduto {
  id?: number;
  nome: string;
  validade: Date;
  precoProduto: number;

}
