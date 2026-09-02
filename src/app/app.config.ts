import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Route `data` lands on matching component inputs.
      withComponentInputBinding(),
      // The header's section links navigate by fragment, so the router has to
      // own anchor scrolling; restoring position keeps Back where it was.
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    // Every route is prerendered; replaying events covers clicks that land
    // between first paint and hydration.
    provideClientHydration(withEventReplay()),
  ],
};
