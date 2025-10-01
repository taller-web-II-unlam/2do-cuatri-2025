import { Routes } from "@angular/router";
import { ListEpisodes } from "./pages/list-episodes/list-episodes";

export const episodeRoutes: Routes = [

    {
        path: '',
        children : [
            {
                path : '',
                component : ListEpisodes
            },
            {
                path : "**",
                redirectTo : ''
            }
        ]
    },

]