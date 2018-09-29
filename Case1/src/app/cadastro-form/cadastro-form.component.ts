import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { stringify } from '@angular/core/src/util';
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

                  inputNome: [null, Validators.required],
                  inputEmail: [null, [Validators.required,Validators.email]],
                  inputUsuario: [null,Validators.required],
                  inputSenha: [null,Validators.required],
                  
                  //dados de endereço agrupados 
                  endereco: this.formBuilder.group
                  ({
                            inputEstado: [null,Validators.required],
                            inputCidade: [null,Validators.required],
                            inputRua:    [null,Validators.required],        
                            inputCep:    [null,Validators.required],
                            inputBairro: [null,Validators],
                            inputComple: [null,Validators]
                  })    

            });
  }
    // verifica se o campo foi tocado ou esta valido
    verificaValidTouched(campo)
    {
      return this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    }

    AplicaCssErro (campo)
    {
      return 
      {
        'has-error': this.verificaValidTouched (campo);
        'has-feedback': this.verificaValidTouched(campo);
      }
      
    }
    
    onSubmit()
    {
      console.log(this.formulario.value);

      //tentar arrumar o post depois!!
      //lançado no servidor
      //this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
      // .map(res=>res.json);
      //.subscribe(dados => console.log(dados));

    }

 
}
  


