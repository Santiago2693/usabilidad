import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.scss']
})
export class BarraOpcionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  jquerry(){
    $(this).toggleClass("fa-times");
    $(".nav-menus").toggleClass("active");

  }
  jquerrySubOpciones(){
    $(this).toggleClass("fa-times");
    $("ul li").toggleClass("active");

  }

}
