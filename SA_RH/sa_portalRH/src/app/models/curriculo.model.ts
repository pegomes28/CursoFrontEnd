// Arquivo responsável pela modelagem para Curriculos
export class Curriculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _cpf: string,
    private _sobreMim: string,
    private _experiencias: string,
    private _formacoes: string
  ) {}

  // Criar os métodos de acesso público

  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value :string) {
    this._nome = value;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public set cpf(value :string) {
    this._cpf = value;
  }
  public get sobreMim(): string {
    return this._sobreMim;
  }

  public set sobreMim(value :string) {
    this._sobreMim = value;
  }
  public get experiencias(): string {
    return this._experiencias;
  }

  public set experiencias(value :string) {
    this._experiencias = value;
  }
  public get formacoes(): string {
    return this._formacoes;
  }

  public set formacoes(value :string) {
    this._formacoes = value;
  }

}

