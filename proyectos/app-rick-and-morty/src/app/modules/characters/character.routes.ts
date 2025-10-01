import { Routes } from "@angular/router";
import { ListCharacters } from "./pages/list-characters/list-characters";

export const characterRoutes: Routes = [

    {
        path: '',
        children : [
            {
                path : '',
                component : ListCharacters
            },
            {
                path : 'detail-characters',
                loadComponent: () => import('./pages/detail-character/detail-character')
            },
            {
                path : "**",
                redirectTo : ''
            }
        ]
    },

]