import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { MsalGuard } from '@azure/msal-angular';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'loginpage',component:LoginpageComponent,canActivate: [MsalGuard]},
  {path:'homepage',component:HomepageComponent,canActivate: [MsalGuard]},
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'profile',component: ProfileComponent,canActivate: [MsalGuard]},
  {
    // Needed for hash routing
    path: 'code',component: HomepageComponent
  },
  {
    path: '',component: LoginpageComponent
  },
  {
    // Needed for Error routing
    path: 'error',component: HomepageComponent
  }
];



const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
