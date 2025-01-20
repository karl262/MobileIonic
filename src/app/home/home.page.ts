import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    let num = 10;
    console.log('Hola Mundo');
    console.log('Hola soy Pepito');
    console.log('Mi primer componente');
    // debugger;
    num = 20;
    num = 30;
    num = 40;
    num = 50;

    console.log('Hola soy Juan');
    console.log('Hola soy Luis');

  }

}
