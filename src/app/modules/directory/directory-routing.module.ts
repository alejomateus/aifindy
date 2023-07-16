import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
  {
    path: ':id',
    component: ItemComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
