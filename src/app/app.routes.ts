import { Routes } from '@angular/router';
import { QrGenerator } from './qr-generator/qr-generator';
import { Home } from './home/home';

export const routes: Routes = [
     { path: '', component: Home },
    { path: 'qr', component: QrGenerator }
];
