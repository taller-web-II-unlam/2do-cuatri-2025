import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episode, GetEpisode } from '../../../modules/episodes/interfaces/episode.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private httpClient = inject(HttpClient);

  getEpisode(): Observable<Episode[]> {

    return this.httpClient.get<GetEpisode>(`${environment.API_URL}/episode`)
      .pipe(
        map((res: GetEpisode) => {
          return res.results
        })
      )
  }

}
