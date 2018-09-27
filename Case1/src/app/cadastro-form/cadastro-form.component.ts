import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit{
  
  formulario: FormGroup;

  constructor( private formBuilder:FormBuilder) {}


  ngOnInit(){

    this.formulario = this.formBuilder.group({

      inputNome: [null, Validators.required],
      inputEmail: [null, [Validators.required,Validators.email]],
      inputCidade: [null,Validators.required],
      inputUsuario: [null,Validators.required],
      inputSenha: [null,Validators.required]

    });
    
    }
    // verifica se o campo foi tocado ou esta valido
    verificaValidTouched (campo)
    {
      return this.formulario.get(campo).valid && this.formulario.get(campo).touched
    }

    AplicaCssErro (campo)
    {
      return {
        'has-error': this.verificaValidTouched (campo),
        'has-feedback': this.verificaValidTouched(campo)
      }
      
    }
    
    onSubmit(){
      console.log (this.formulario.value);
      this.formulario.reset;
  }

 
}
  


