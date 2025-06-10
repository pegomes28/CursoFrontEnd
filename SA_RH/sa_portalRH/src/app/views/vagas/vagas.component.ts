import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})

// Controller -> View -> Model
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = []; // Vetor para armazenar as vagas do BD

  constructor(private _vagasService: VagasService){} // Injeta o serviço de vagas dentro do componente

  ngOnInit(): void {
    this.listarVagas();
  }

  // Função para listar as vagas

  listarVagas(){
    this._vagasService.getVagas().subscribe( // subscribe é um método do Observable que permite receber os dados e tratar para o vetor
      (e) => { //Listar vaga por vaga dentro do vetor
        this.vagas= e.map(
          (vaga) => {
            return Vaga.fromMap(vaga);
          }
        );
      }
    )
  }

}
