import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx'
@Injectable({
  providedIn: 'root'
})
export class DropService {

  constructor( private http:Http) { }

  getEstadoBr(){
    //.map n existe???/ 
    return this.http.get('assets/dados/estadosbr.json').forEach ((res:Response)=> res.json());
    
  }
 
}
