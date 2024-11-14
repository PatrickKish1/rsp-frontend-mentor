import { Routes } from '@angular/router';
import path from 'node:path';
import { RspPageComponent } from './rsp-page/rsp-page.component';
import { BonusComponent } from './bonus/bonus.component';

export const routes: Routes = [
    {
        path: '',
        component: RspPageComponent
    },
    {
        path: 'main',
        component: RspPageComponent
    },
    {
        path: 'bonus',
        component: BonusComponent
    }

];
