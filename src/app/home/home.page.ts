import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number;
  mensaje: string = "...";

  constructor() { }
  compruebaNumero() {
    if (this.num % 2 == 0) {
      this.mensaje = "par";
    } else {
      this.mensaje = "impar";
    }
  }
}
