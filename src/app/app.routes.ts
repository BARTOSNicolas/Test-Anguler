import { Routes } from '@angular/router';
//import { Home } from './home/home';

export const routes: Routes = [
    /*{
        path: 'home',
        component: Home
    }*/
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'lessons',
        children: [
                {
                    path: 'text-interpolation',
                    loadComponent: () => import('./lessons/text-interpolation/text-interpolation').then(m => m.TextInterpolation)
                },
                {
                    path: 'property-binding',
                    loadComponent: () => import('./lessons/property-binding/property-binding').then(m => m.PropertyBinding)
                },
            {
                path: 'event-binding',
                loadComponent: () => import('./lessons/event-binding/event-binding').then(m => m.EventBinding)
            }
            ]
    },
    {
        path: 'exercices',
        children: [
            {
                path: 'attribute-binding',
                loadComponent: () => import('./exos/attribute-binding/attribute-binding').then(m => m.AttributeBinding)
            },
            {
                path: 'event-binding',
                loadComponent: () => import('./exos/event-binding/event-binding').then(m => m.EventBinding)
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
    }

];


