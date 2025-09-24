import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { App } from './app/app';
import { routes } from './app/app.routes'; // ✅ define routes in a separate file

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    importProvidersFrom(CarouselModule),
    provideRouter(routes, withComponentInputBinding()) // ✅ provide router
  ]
});
