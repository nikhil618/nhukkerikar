import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * The build renders every route to static HTML — there is no server at
 * runtime, only files on a CDN.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
