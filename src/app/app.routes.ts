import { Routes } from '@angular/router';
//import { Home } from './home/home';
import {AuthGuardService} from "./services/auth-guard.service";

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
        path:'register',
        loadComponent:()=>import('./auth/register/register').then(m=>m.Register)
    },
    {
        path:'login',
        loadComponent:()=>import('./auth/login/login').then(m=>m.Login)
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
        path: 'task-api',
        loadComponent: () => import('./task-list-firebase/task-list-firebase').then(m => m.TaskListFirebase)
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
                    path: 'observables-advanced',
                    loadComponent: () => import('./lessons/observables-advanced/observables-advanced').then(m => m.ObservablesAdvanced)
                },
                {
                    path: 'signals',
                    loadComponent: () => import('./lessons/signals/signals').then(m => m.Signals)
                },
                {
                    path: 'http-api',
                    loadComponent: () => import('./lessons/http-api/http-api').then(m => m.HttpApi)
                },
                {
                    path: 'pipes',
                    loadComponent: () => import('./lessons/pipes/pipes').then(m => m.Pipes)
                },
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
            },
            {
                path: 'tp-observables',
                loadComponent: () => import('./exos/tp-observables/tp-observables').then(m => m.TpObservables)
            },
            {
                path: 'tp-signals',
                loadComponent: () => import('./exos/tp-signals/tp-signals').then(m => m.TpSignals)
            },
        ]
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadComponent: () => import('./auth/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
    }

];


