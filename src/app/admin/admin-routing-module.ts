import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHome } from './admin-home/admin-home';
import { AdminMainCategory } from './MainCategory/admin-main-category/admin-main-category';
import { AdminCreateMainCategory } from './MainCategory/admin-create-main-category/admin-create-main-category';
import { AdminUpdateMainCategory } from './MainCategory/admin-update-main-category/admin-update-main-category';

const routes: Routes = [
  {
    path:"",
    component:AdminHome
  },
  {
    path:"maincategory",
    component:AdminMainCategory
  },
  {
    path:"maincategory/create",
    component:AdminCreateMainCategory
  },
  {
    path:"maincategory/update",
    component:AdminUpdateMainCategory
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
