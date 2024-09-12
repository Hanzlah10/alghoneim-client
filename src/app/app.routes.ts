import { Routes } from '@angular/router';
import { ComingSoonComponent } from './shared/components/coming-soon/coming-soon.component';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./Home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'ComingSoon',
        component: ComingSoonComponent
    },
    {
        path: '**',
        redirectTo: 'ComingSoon'
    }
];
