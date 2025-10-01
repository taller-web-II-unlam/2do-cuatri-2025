import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GetLocation, Location } from '../../../modules/location/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private httpClient = inject(HttpClient);

  getLocation(): Observable<Location[]> {

    return this.httpClient.get<GetLocation>(`${environment.API_URL}/location`)
      .pipe(
        map((res: GetLocation) => {
          return res.results
        })
      )
  }

}
