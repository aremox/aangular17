import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transitions-1',
        title: 'View Transitions 1',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions1.component'),
      },
      {
        path: 'view-transitions-2',
        title: 'View Transitions 2',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions2.component'),
      },
      {
        path: '', redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }




];
