import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { SignUp } from './sign-up/sign-up';
import { InterfazView } from './interfaz-view/interfaz-view';
import { Landpage } from './landpage/landpage';
import { Sales } from './sales/sales';

export const routes: Routes = [

 
   {
    path: 'view',
    component: InterfazView,
    children: [
      {
        path: 'sales', 
        component: Sales,
      },
      {
    path: 'dashboard',
    component: Dashboard,
  }
    ]
  },
  {
    path: '',
    component: Landpage,
  }
];
