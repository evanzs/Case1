import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
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

      inputNome: ["Evandro"],
      inputEmail: ["Evandro"]

    });
    
    }
   
    
    onSubmit(){
      console.log (this.formulario.value);
      this.formulario.reset;
  }

 
}
  


