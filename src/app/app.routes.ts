import { Routes } from '@angular/router';
import { MyResumeComponent } from './pages/my-resume/my-resume.component';

export const routes: Routes = [
    { path: 'resume', component: MyResumeComponent },  
    { path: '', redirectTo: 'resume', pathMatch: 'full' }
];
