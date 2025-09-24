import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing-module';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Feature } from './components/feature/feature';
import { Service } from './components/service/service';
import { Productslider } from './components/productslider/productslider';
import { Products } from './components/products/products';
import { Testinomial } from './components/testinomial/testinomial';
import { Newsletter } from './components/newsletter/newsletter';
import { Breadcum } from './components/breadcum/breadcum';
import { Homepage } from './pages/homepage/homepage';
import { Aboutpage } from './pages/aboutpage/aboutpage';
import { Featurepage } from './pages/featurepage/featurepage';
import { Servicepage } from './pages/servicepage/servicepage';
import { Testinomialpage } from './pages/testinomialpage/testinomialpage';
import { Contactuspage } from './pages/contactuspage/contactuspage';
import { Errorpage } from './pages/errorpage/errorpage';
import { Productpage } from './pages/productpage/productpage';
import { Shoppage } from './pages/shoppage/shoppage';
import { Cart } from './components/cart/cart';
import { Cartpage } from './pages/cartpage/cartpage';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    Navbar,
    Footer,
    About,
    Feature,
    Service,
    Productslider,
    Products,
    Testinomial,
    Newsletter,
    Breadcum,
    Homepage,
    Aboutpage,
    Featurepage,
    Servicepage,
    Testinomialpage,
    Contactuspage,
    Errorpage,
    Productpage,
    Shoppage,
    Cart,
    Cartpage
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CarouselModule
  ],
  exports:[
    Navbar,
    Footer,
    Errorpage,
    Breadcum
  ]
})
export class FrontModule { }
