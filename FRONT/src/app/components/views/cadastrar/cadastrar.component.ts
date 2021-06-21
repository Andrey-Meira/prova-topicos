import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  form!: FormGroup;
  livro : Livro = new Livro();

  constructor(
    private service: LivroService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
      this.form = this.formBuilder.group({
        nome: [null, Validators.required],
        isbn: [null, [Validators.required]],
        preco: [null, [Validators.required]]
      });
    }

  ngOnInit(): void {
    
  }

  cadastrar(): void {
    if (this.form.valid) {
      var values = this.form.value;
      this.service.cadastrar(this.livro).subscribe(livro => {
          alert('Livro Cadastrado com sucesso');
          this.router.navigate(['/livros/listar']);
      });
    }
  }
}
