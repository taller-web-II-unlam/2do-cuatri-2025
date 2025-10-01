import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeclaComponent } from "./tecla/tecla.component";

@Component({
  selector: 'app-root',
  imports: [TeclaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-piano';

  teclas:any = [
    {tecla : 1, color: "red"},
    {tecla : 2, color: "orange"},
    {tecla : 3, color: "yellow"},
    {tecla : 4, color: "green"},
    {tecla : 5, color: "teal"},
    {tecla : 6, color: "blue"},
    {tecla : 7, color: "purple"},

  ]
colorArray:string[] = [
  "background-color: orange", "background-color: yellow"
]

  color:string = "background-color: orange";
  fontsize:string = "padding: 100px;";

  hacerMusica(numero:number){
    console.log("musica papáa!!!!");
    
    const audio = new Audio()
    audio.src = 'sonidos/note' + numero + '.mp3';
    audio.load();
    audio.play();

  }

  dad(){
    console.log("evento dad");
    
  }
}
