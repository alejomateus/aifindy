import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'directory' },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'directory',
    loadChildren: () =>
      import('./modules/directory/directory.module').then((m) => m.DirectoryModule),
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./modules/resources/resources.module').then((m) => m.ResourcesModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: "enabled",
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
