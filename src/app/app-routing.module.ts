import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { LoginFormComponent } from './modules/auth/login-form/login-form.component';
import { RegisterFormComponent } from './modules/auth/register-form/register-form.component';
import { LandingPageComponent } from './modules/landing-page/landing-page/landing-page.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { DetailedViewComponent } from './modules/detailed-view/detailed-view/detailed-view.component';
import { LoadingScreenComponent } from './shared/components/loading-screen/loading-screen.component';
import { CreationViewComponent } from './modules/creation-view/creation-view/creation-view.component';
import { ProfileViewComponent } from './modules/profile-view/profile-view/profile-view.component';
import { SnippetResolver } from './core/resolvers/snippet.resolver';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [{ path: '', component: HeaderComponent }],
  },

  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'search',
    component: MainPageComponent,
  },
  {
    path: 'details-view/:id',
    component: DetailedViewComponent,
    canActivate: [AuthenticationGuard],
    resolve: {
      snippet: SnippetResolver,
    },
  },
  {
    path: 'creation-view',
    component: CreationViewComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'loading-screen',
    component: LoadingScreenComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile-view',
    component: ProfileViewComponent,
    canActivate: [AuthenticationGuard],
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
