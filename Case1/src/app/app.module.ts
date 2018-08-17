import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import {CadastroFormComponent} from './cadastro-form/cadastro-form.component';
@NgModule({
  declarations: [
    
    AppComponent,
  CadastroFormComponent
    
  ],
  imports: [
   
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

