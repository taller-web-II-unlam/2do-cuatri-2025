import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Character, GetCharacter } from '../../../modules/characters/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

    private httpClient = inject(HttpClient);

    getCharacters():Observable<Character[]>{
      
      return this.httpClient.get<GetCharacter>(`${environment.API_URL}/character`)
      .pipe(
        map((res:GetCharacter)=>{
          return res.results
        })
      )
    }
  
}
