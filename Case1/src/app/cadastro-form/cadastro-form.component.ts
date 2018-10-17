import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { error } from 'protractor';

//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit
{
  
  formulario: FormGroup;
  
  constructor( 
               private formBuilder:FormBuilder,
              private http: Http // variavel http para post no servidor
    ) {}


  ngOnInit()
  {

            this.formulario = this.formBuilder.group
            ({

                  inputNome:[null, Validators.required],
                  inputEmail: [null, [Validators.required,Validators.email]],
                  inputUsuario: [null,Validators.required],
                  inputSenha: [null,Validators.required],
                  
                  //dados de endereço agrupados 
                  endereco: this.formBuilder.group
                  ({
                            inputEstado: [null,Validators.required],
                            inputCidade: [null,Validators.required],
                            inputRua:    [null,Validators.required],        
                            inputCep:    [null,[Validators.required]],
                            inputBairro: [null,Validators],
                            inputComple: [null,Validators]
                  }),

            });
  }
    // verifica se o campo foi tocado ou esta valido
    verificaValidTouched(campo: string)
    {
      return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;

    }

    aplicaCssErro(campo: string) {
      return {
        'form is-invalid': this.verificaValidTouched(campo),
        
      };
    }
     
    
    onSubmit()
    {
      console.log(this.formulario.value);

     

    }

 
}
  


