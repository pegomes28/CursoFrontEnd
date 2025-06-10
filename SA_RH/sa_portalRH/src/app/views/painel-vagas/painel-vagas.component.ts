import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit{ // Controler ->
  // Atributos
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  // Rastrear os dados no formulário por interpolação {{ }}
  public vagas: Vaga[] = []; //Vetor para armazenar as vagas do BD

  // Constructor
  constructor(private _vagasService: VagasService) {} //Aplicando o service no construtor

  // Método onInit
  ngOnInit(): void {
    this.listarVagas();
  }
  
  // READ- VAGAS
  // 4 métodos para crud
  listarVagas(): void{
    this._vagasService.getVagas().subscribe(
      (e) => {
        this.vagas = e.map(
          (vaga)=> Vaga.fromMap(vaga)
        );
      }, (error) => {
        console.error("Erro ao Listar Vagas: ", error);
      }
    );
  }

  // Listar Vagas por ID
  listarVagaPorId(vaga:Vaga): void{
    // Método para listar uma vaga no formulário para edição
    this.vaga = vaga;
    //  a vaga clicada é definida como a vaga atual do formulário
  }

  // CREATE - VAGA
  cadastrarVaga(): void{
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, "", "", "", 0); // Limpa o formulário
        this.listarVagas(); // Lista as vagas novamente
      }, (error) => {console.error("Erro ao Cadastrar Vaga: ", error);  }
    );
  }

  // UPDATE - VAGA
  atualizarVaga(id:any):void{
    this._vagasService.putVaga(id,this.vaga).subscribe(
    () => {
      this.vaga = new Vaga(0, '', '', '', 0); // Limpa o formulário
      this.listarVagas(); // Lista as vagas novamente
    },
    (error) => {console.error('Erro ao Atualizar Vaga: ', error);
    }
  );
  }

  // DELETE - VAGA
  excluirVaga(id:any): void{
    this._vagasService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {console.error('Erro ao Deletar Vaga: ', error);
      }
    );
  }
  }

