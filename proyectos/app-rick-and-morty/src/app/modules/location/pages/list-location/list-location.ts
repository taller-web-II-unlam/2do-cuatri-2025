import { Component, inject } from '@angular/core';
import { LocationService } from '../../../../api/api-rick/location/location.service';
import { TableModule } from 'primeng/table';
import { Location } from '../../interfaces/location.interface';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-list-location',
  imports: [TableModule,DatePipe,UpperCasePipe],
  templateUrl: './list-location.html',
  styleUrl: './list-location.css'
})
export default class ListLocation {

  location: Location[] = [];

  locationService = inject(LocationService);

  constructor() {
    console.log("hola constructor");

  }

  ngOnInit(): void {
    console.log("hola onInit");
    this.listLocation()

  }

  listLocation() {
    console.log("llamando a los personajes");

    this.locationService.getLocation().subscribe(
      {
        next: (data) => {
          this.location = data;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("completado");

        }
      }
    )

  }

}
