import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  dialogData: any;
  dataChange: BehaviorSubject<Livro[]> = new BehaviorSubject<Livro[]>([]);
  
  private baseURL : String = 'http://localhost:3000';

  constructor(private http : HttpClient, private router: Router) { }

  getDialogData() {
    return this.dialogData;
  }

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseURL}/livro/listar`);
  }

  cadastrar(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.baseURL}/livro/cadastrar`, livro);
  }

}
