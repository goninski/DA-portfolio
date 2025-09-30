import { Routes } from '@angular/router';
import { Home } from './_routes/home/home';
import { LegalNotice } from './_routes/legal-notice/legal-notice';
import { Test } from './_routes/test/test';

export const routes: Routes = [
    { path: '', component: Home, data: {bodyClass: 'home'} },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'test', component: Test, data: {bodyClass: 'test'} },
    // Redirect any other path to the home page
    { path: '**', redirectTo: ''}
];
