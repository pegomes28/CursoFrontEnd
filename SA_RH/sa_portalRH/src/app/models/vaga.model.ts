// Arquivo responsável pela modelagem para vagas
export class Vaga {
  // Atributos
  // private _id: number;
  // private _nome: string;
  // private _foto: string;
  // private _descricao: string;
  // private _salario: number;

  // // Métodos
  // // Construtor -> Método da classe para criação de objetos
  // constructor(id: number, nome: string, foto: string, descricao:string, salario: number){
  //   this._id = id,
  //   this._nome = nome,
  //   this._foto = foto,
  //   this._descricao = descricao,
  //   this._salario = salario
  // }

  // JavaScript/TypeScript há uma forma de declarar os atributos e já fazer o construtor tudo de uma vez
  constructor(
    private _id: number,
    private _nome: string,
    private _foto: string,
    private _descricao: string,
    private _salario: number
  ) {}

  // Criar os métodos de acesso público (Getters and Setters)

  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }
  
  public get foto(): string {
    return this._foto;
  }

  public set foto(value: string) {
    this._foto = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get salario(): number {
    return this._salario;
  }

  public set salario(value: number) {
    this._salario = value;
  }
}
