import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'legal-notice', component: LegalNotice },
    // Redirect any other path to the home page
    { path: '**', redirectTo: '' }
];
