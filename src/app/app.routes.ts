import { Routes } from '@angular/router';

import { Home } from './_routes/home/home';
import { LegalNotice } from './_routes/legal-notice/legal-notice';

export const routes: Routes = [
    { path: '', component: Home, data: {bodyClass: 'home'} },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'rechtliches', component: LegalNotice },
    { path: '**', redirectTo: ''}
];
