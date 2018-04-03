import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Stage1Component } from './stage1/stage1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'stage1/:id',
    component: Stage1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
