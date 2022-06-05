import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AuthModule} from './modules/auth/auth.module';
import {LandingPageModule} from './modules/landing-page/landing-page.module';
import {MainPageModule} from './modules/main-page/main-page.module';
import {HighlightJsModule} from 'ngx-highlight-js';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HotToastModule} from '@ngneat/hot-toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServerErrorInterceptor} from './core/interceptors/server-error/server-error.interceptor';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {SharedModule} from './shared/shared.module';
import {DetailedViewModule} from './modules/detailed-view/detailed-view.module';
import {CreationViewModule} from './modules/creation-view/creation-view.module';
import {ProfileViewModule} from './modules/profile-view/profile-view.module';
import {GoogleLoginProvider, BaseLoginProvider, SocialLoginModule} from "@abacritt/angularx-social-login";

export const googleConfig = {scope: 'email', ux_mode: 'redirect', response_type: 'code'};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    LandingPageModule,
    AuthModule,
    CoreModule,
    HighlightJsModule,
    BrowserAnimationsModule,
    HighlightModule,
    SharedModule,
    DetailedViewModule,
    CreationViewModule,
    ProfileViewModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/styles/solarized-dark.css',
      },
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('134169247632-318tks8l71omeg5v4vubvomn6qfkoiov.apps.googleusercontent.com', googleConfig),
          },
        ]
      }
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
