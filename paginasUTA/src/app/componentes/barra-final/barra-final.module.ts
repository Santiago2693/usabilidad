import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BarraFinalComponent } from './barra-final/barra-final.component';



@NgModule({
  declarations: [

    BarraFinalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraFinalComponent

  ]
})
export class BarraFinalModule { }
