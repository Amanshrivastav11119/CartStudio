import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Aboutpage } from './pages/aboutpage/aboutpage';
import { Featurepage } from './pages/featurepage/featurepage';
import { Servicepage } from './pages/servicepage/servicepage';
import { Testinomialpage } from './pages/testinomialpage/testinomialpage';
import { Contactuspage } from './pages/contactuspage/contactuspage';
import { Productpage } from './pages/productpage/productpage';
import { Shoppage } from './pages/shoppage/shoppage';
import { Errorpage } from './pages/errorpage/errorpage';
import { Cart } from './components/cart/cart';

const routes: Routes = [
{
  path:"",
  component:Homepage
},
{
  path:"about",
  component:Aboutpage
},
{
  path:"feature",
  component:Featurepage
},
{
  path:"service",
  component:Servicepage
},
{
  path:"testinomial",
  component:Testinomialpage
},
{
  path:"Contactuspage",
  component:Contactuspage
},
{
  path:"product",
  component:Productpage
},
{
  path:"shop",
  component:Shoppage
},
{
  path:"cart",
  component:Cart
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
