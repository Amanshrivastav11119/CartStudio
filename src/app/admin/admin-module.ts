import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { FrontModule } from '../front/front-module';
import { AdminHome } from './admin-home/admin-home';
import { Adminslider } from './adminslider/adminslider';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminMainCategory } from './MainCategory/admin-main-category/admin-main-category';
import { AdminCreateMainCategory } from './MainCategory/admin-create-main-category/admin-create-main-category';
import { AdminUpdateMainCategory } from './MainCategory/admin-update-main-category/admin-update-main-category';


@NgModule({
  declarations: [
    AdminHome,
    Adminslider,
    AdminMainCategory,
    AdminCreateMainCategory,
    AdminUpdateMainCategory
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FrontModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
