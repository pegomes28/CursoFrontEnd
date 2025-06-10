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
  postVaga(vaga:Vaga): Observable<Vaga[]>{  //Método para enviar os dados para API
    return this.http.post<Vaga[]>(this.apiUrl,vaga);
  // Observable -> rxjs => tradutor de Json -> typescript
  }

  // put
  // nomeDoMétodo(parâmetros): Coleção chave -> valor
  putVaga(id: any, vaga:Vaga): Observable<Vaga[]>{
    // http://localhost:3010/vagas"/"XXX
    const url = this.apiUrl+"/"+id; // Construir a url join(apiUrl+id)
    return this.http.put<Vaga[]>(url,vaga);
  }

  // delete
  deleteVaga(id:any): Observable<Vaga[]>{
    const url = this.apiUrl+"/"+id;
    return this.http.delete<Vaga[]>(url);
  }
}
