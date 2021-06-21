import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { Usuario } from "../components/models/Usuario";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    dialogData: any;
    dataChange: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);
    private baseURL : String = 'http://localhost:3000';
  
    constructor(private http : HttpClient) { }
    
    getDialogData() {
      return this.dialogData;
    }

    listar(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.baseURL}/usuario/listar`);
    }
  
    cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.baseURL}/usuario/cadastrar`, usuario);
    }

    deletar(cpf: string){
      this.http.delete<Usuario[]>(`${this.baseURL}/usuario/remover/${cpf}`).subscribe(data => {
        alert("Usuário deletado com sucesso!");
        location.reload();
        }
      );
    }

    editar(usuario: Usuario){
      this.http.put(`${this.baseURL}/usuario/alterar`, usuario).subscribe(data => {
        this.dialogData = usuario;
        alert("Usuário alterado com sucesso!");
        location.reload();
      }
      );
    }
  
  }