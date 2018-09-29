import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import {CadastroFormComponent} from './cadastro-form/cadastro-form.component';
import { CadastroFormModule } from './cadastro-form/cadastro-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    
    
  
    
  ],
  imports: [
   
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CadastroFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

