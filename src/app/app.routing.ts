import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2_1Component } from './stage2.1/stage2.1.component';
import { Stage2_2Component } from './stage2.2/stage2.2.component';
import { Stage3_1Component } from './stage3-1/stage3-1.component';
import { Stage3_2Component } from './stage3-2/stage3-2.component';
import { Stage3_3Component } from './stage3-3/stage3-3.component';
import { Stage3_4Component } from './stage3-4/stage3-4.component';

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
  },
  {
    path: 'stage2_2/:id',
    component: Stage2_2Component
  },
  {
    path: 'stage3_1/:id',
    component: Stage3_1Component
  },
  {
    path: 'stage3_2/:id',
    component: Stage3_2Component
  },
  {
    path: 'stage3_3/:id',
    component: Stage3_3Component
  },
  {
    path: 'stage3_4/:id',
    component: Stage3_4Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
