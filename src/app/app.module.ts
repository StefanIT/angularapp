import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { IteratorPipe } from './pipes/iterator.pipe';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginModalComponent } from './components/shared/header/login-modal/login-modal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { SocialNetworksComponent } from './components/shared/social-networks/social-networks.component';
import { GeneralComponent } from './components/home/general/general.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { LatestMoviesComponent } from './components/home/latest-movies/latest-movies.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../app/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginModalComponent,
    NavbarComponent,
    SocialNetworksComponent,
    GeneralComponent,
    LatestMoviesComponent,
    FooterComponent,
    BannerComponent,
    IteratorPipe,
    HomeComponent,
    SingleMovieComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
          path: "",
          component: HomeComponent
      },
      {
          path: "single/:id",
          component: SingleMovieComponent
      },
      {
        path: "contact",
        component: ContactComponent
      }
  ]),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, NavbarComponent, FooterComponent, SocialNetworksComponent]
})
export class AppModule { }