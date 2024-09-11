import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./Home/home.routes').then(m => m.homeRoutes)
    }
];
