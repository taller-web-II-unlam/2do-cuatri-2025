import { Routes } from "@angular/router";
import ListLocation from "./pages/list-location/list-location";

export const locationRoutes: Routes = [

    {
        path: '',
        children : [
            {
                path : '',
                component : ListLocation
            },
            {
                path : "**",
                redirectTo : ''
            }
        ]
    },

]