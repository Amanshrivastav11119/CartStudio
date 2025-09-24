import { Routes } from '@angular/router';
import { Errorpage } from './front/pages/errorpage/errorpage';

export const routes: Routes = [
{
  path:"",
  loadChildren: () => import("../app/front/front-module").then(m=>m.FrontModule)
},
{
  path:"user",
  loadChildren: () => import("../app/user/user-module").then(m=>m.UserModule)
},
{
  path:"admin",
  loadChildren: () => import("../app/admin/admin-module").then(m=>m.AdminModule)
},
{
  path:"**",
  component:Errorpage
}
];
