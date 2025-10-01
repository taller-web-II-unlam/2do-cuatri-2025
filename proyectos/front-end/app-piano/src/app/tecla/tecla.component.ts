import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tecla',
  imports: [],
  templateUrl: './tecla.component.html',
  styleUrl: './tecla.component.css'
})
export class TeclaComponent {

  @Input()
  color:string = ""

  @Input()
  numero:number = 1

  @Output()
  eventEmitterEmitirTecla = new EventEmitter<number>();
  
  @Output()
  dad = new EventEmitter<number>();

  hacerMusica(){
    this.eventEmitterEmitirTecla.emit(this.numero);
  } 

}
