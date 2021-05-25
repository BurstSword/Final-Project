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
import { ArtifactPartsPipe } from './pipes/artifact-parts.pipe';
import { EnemiesComponent } from './pages/enemies/enemies.component';
import { EnemyImgPipe } from './pipes/enemy-img.pipe';
import { DropsImgPipe } from './pipes/drops-img.pipe';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { WeaponsImgPipe } from './pipes/weapons-img.pipe';
import { BuilderComponent } from './pages/builder/builder.component';
import { BuildArtifactsPipe } from './pipes/build-artifacts.pipe';
import { BuildsComponent } from './pages/builds/builds.component';



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
    ArtifactSetPipe,
    ArtifactPartsPipe,
    EnemiesComponent,
    EnemyImgPipe,
    DropsImgPipe,
    WeaponsComponent,
    WeaponsImgPipe,
    BuilderComponent,
    BuildArtifactsPipe,
    BuildsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSplideModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
