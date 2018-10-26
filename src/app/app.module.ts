import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarvelComponent } from './marvel/marvel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarvelSingleComponentComponent } from './marvel-single-component/marvel-single-component.component';
import { TruncateModule } from 'ng2-truncate';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path: 'signup', component: SignupComponent,  },
  { path: 'profile', component: ProfileComponent,  },
  { path: '', component: HomePageComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'marvel/:id', component: MarvelSingleComponentComponent },
  { path: 'create-marvel', component: FormComponent},
  { path: 'request-password-reset', component: RequestResetComponent, },
  { path: 'response-password-reset', component: ResponseResetComponent, },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    MarvelComponent,
    PageNotFoundComponent,
    MarvelSingleComponentComponent,
    FormComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TruncateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [HttpClientModule, MarvelService, AuthService, TokenService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
