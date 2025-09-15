import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors, } from '@angular/common/http';
import { headerInterceptor } from './core/interceptor/header/header.interceptor';
import { errorInterceptor } from './core/interceptor/error/error.interceptor';
import { loadingInterceptor } from './core/interceptor/loading/loading.interceptor';
import {provideTranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:"top"})),
    provideHttpClient(withFetch(),withInterceptors([headerInterceptor,errorInterceptor,loadingInterceptor])),
  provideAnimations(),
  provideToastr(),
     provideClientHydration(withEventReplay()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
  ]
};
