import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFormComponent } from './cadastro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from '../form-control/form-control.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [

    CadastroFormComponent,
    FormControlComponent
  ],

  exports:[CadastroFormComponent]
})
export class CadastroFormModule { }
