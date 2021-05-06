import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './utils/auth.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterimagePipe } from './pipes/characterimage.pipe';
import { ConstellationPipe } from './pipes/constellation.pipe';
import { TypesPipe } from './pipes/types.pipe';
import { ElementsPipe } from './pipes/elements.pipe';
import { NgxSplideModule } from 'ngx-splide';
import { LoadingComponent } from './components/loading/loading.component';
import { ArtifactsComponent } from './pages/artifacts/artifacts.component';
import { ArtifactSetPipe } from './pipes/artifact-set.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    CharactersComponent,
    CharacterimagePipe,
    ConstellationPipe,
    TypesPipe,
    ElementsPipe,
    LoadingComponent,
    ArtifactsComponent,
    ArtifactSetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSplideModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
