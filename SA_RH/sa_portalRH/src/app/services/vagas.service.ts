import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3010/vagas"; // Endereço da API

  constructor(private http: HttpClient ) { }

  // Criar os métodos para a conexão com a apiREST

  // get - Obter a lista de vagas
  getVagas():Observable<Vaga[]> { // Observable - rxjs => tradutor de Json -> typescript
    return this.http.get<Vaga[]>(this.apiUrl); // Conecta com a API para pegar os dados
  }

  // post

  // put

  // delete
}
