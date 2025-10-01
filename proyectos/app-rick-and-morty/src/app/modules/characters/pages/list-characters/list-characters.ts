import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../../../api/api-rick/character/character.service';
import { TableModule } from 'primeng/table';
import { CardClasses } from 'primeng/card';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-characters',
  imports: [TableModule],
  templateUrl: './list-characters.html',
  styleUrl: './list-characters.css'
})
export class ListCharacters implements OnInit, OnDestroy{

  character = signal<Character[]>([]);

  characterService = inject(CharacterService);

  $stop = new Subject();

  constructor(){
    console.log("hola constructor");
    
  }
  ngOnDestroy(): void {
    this.$stop.next(1);
  }

  ngOnInit(): void {
    console.log("hola onInit");
    this.listCharacters()
    
  }

  listCharacters(){
      console.log("llamando a los personajes");

      this.characterService.getCharacters()
      .pipe(
        takeUntil(this.$stop)
      ).subscribe(
        {
          next : (data)=>{
            this.character.set(data);
            console.log(data);
          },
          error : (error)=>{
            console.log(error);
          },
          complete : ()=>{
            console.log("completado");
            
          }
        }
      )

    }

}
