import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFormComponent } from './cadastro-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [

    CadastroFormComponent
  ],

  exports:[CadastroFormComponent]
})
export class CadastroFormModule { }
