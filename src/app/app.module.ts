import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {authState} from '@pages/auth/store/reducers/auth-login.reducers';
import {UserInfoPreloader} from '@shared/preloaders/user-info.preloader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import en from '@angular/common/locales/en';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {DatePipe, registerLocaleData} from '@angular/common';
import {UrlInterceptor} from '@shared/interceptors/url.interceptor';
import {AuthInterceptor} from '@shared/interceptors/auth.interceptor';
import {ErrorInterceptor} from '@shared/interceptors/error.interceptor';
import { NzMessageModule } from 'ng-zorro-antd/message';

registerLocaleData(en);

export function UserInfoPreloaderFactory(provider: UserInfoPreloader) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreModule.forFeature(AppStateTypesEnum.Auth, authState),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    NzMessageModule
  ],
  providers: [
    UserInfoPreloader,
    {provide: APP_INITIALIZER, useFactory: UserInfoPreloaderFactory, deps: [UserInfoPreloader], multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: NZ_I18N, useValue: en_US},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
