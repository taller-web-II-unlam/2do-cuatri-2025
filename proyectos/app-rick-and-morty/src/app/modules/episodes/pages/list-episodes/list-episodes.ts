import { Component, inject } from '@angular/core';
import { Episode } from '../../interfaces/episode.interface';
import { EpisodeService } from '../../../../api/api-rick/episode/episode.service';
import { TableModule } from "primeng/table";

@Component({
  selector: 'app-list-episodes',
  imports: [TableModule],
  templateUrl: './list-episodes.html',
  styleUrl: './list-episodes.css'
})
export class ListEpisodes {

  episodes: Episode[] = [];

  episodeService = inject(EpisodeService);

  constructor() {
    console.log("hola constructor");

  }

  ngOnInit(): void {
    console.log("hola onInit");
    this.listCharacters()

  }

  listCharacters() {
    this.episodeService.getEpisode().subscribe(
      {
        next: (data) => {
          this.episodes = data;
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
