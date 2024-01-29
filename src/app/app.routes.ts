import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './pages/example-1/example-1.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'example-1',
    component: Example1Component,
    title: 'Example-1'
  },
  {
    path: 'example-2',
    component: Example1Component,
    title: 'Example-2'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}