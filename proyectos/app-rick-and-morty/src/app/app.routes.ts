import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'location',
        loadChildren: () => import('./modules/location/location.routes').then(l => l.locationRoutes)
    },
    {
        path: 'episode',
        loadChildren: () => import('./modules/episodes/episode.routes').then(e => e.episodeRoutes)
    },
    {
        path: 'character',
        loadChildren: () => import('./modules/characters/character.routes').then(c => c.characterRoutes)
    },
    {
        path: '**',
        redirectTo: 'episode'
    },

    // {
    //     path: "ruta-3",
    //     // loadComponent: () => import('./modules/ruta-3/pages/ruta-3.component')
    // },

];
