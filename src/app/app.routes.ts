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
                },
                {
                    path: 'communication',
                    loadComponent: () => import('./lessons/communication/communication').then(m => m.Communication)
                },
                {
                    path: 'observables',
                    loadComponent: () => import('./lessons/observables/observables').then(m => m.Observables)
                },
                {
                    path: 'signals',
                    loadComponent: () => import('./lessons/signals/signals').then(m => m.Signals)
                },
                {
                    path: 'http-api',
                    loadComponent: () => import('./lessons/http-api/http-api').then(m => m.HttpApi)
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
            },
            {
                path: 'two-way-binding',
                loadComponent: () => import('./exos/two-way-binding/two-way-binding').then(m => m.TwoWayBinding)
            },
            {
                path: 'ng-if',
                loadComponent: () => import('./exos/ng-if/ng-if').then(m => m.NgIf)
            },
            {
                path: 'ng-for',
                loadComponent: () => import('./exos/ng-for/ng-for').then(m => m.NgFor)
            },
            {
                path: 'ng-style-ng-class',
                loadComponent: () => import('./exos/ng-style-ng-class/ng-style-ng-class').then(m => m.NgStyleNgClass)
            },
            {
                path: 'tp-communication',
                loadComponent: () => import('./exos/tp-communication/tp-communication').then(m => m.TpCommunication)
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
    }

];


