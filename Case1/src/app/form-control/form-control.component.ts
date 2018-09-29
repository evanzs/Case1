import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {


  @Input() mostrarErro: boolean;
  @Input() msgErro: string;
  constructor() { }

  ngOnInit() {
  }

}
