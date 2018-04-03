import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2_1Component } from './stage2.1/stage2.1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'stage1/:id',
    component: Stage1Component
  },
  {
    path: 'stage2_1/:id',
    component: Stage2_1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
