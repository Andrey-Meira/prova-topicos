import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  codigo: number | undefined;
  livros : Array<Livro> = [];
  displayedColumns: string[] = 
  [ '_id',
    'nome',
    'isbn',
    'preco',
    'createdAt'
  ];

  livrosTable: MatTableDataSource<Livro> = 
    new MatTableDataSource<Livro>(
    this.livros
  );

  constructor(
    private livroService: LivroService
    ) { }

  ngOnInit(): void {
    this.livroService.listar().subscribe(lista => {
      this.livros = lista;
    });
  }
  
}
