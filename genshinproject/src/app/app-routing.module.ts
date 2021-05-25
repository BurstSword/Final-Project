import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ArtifactsComponent } from './pages/artifacts/artifacts.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { BuildsComponent } from './pages/builds/builds.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EnemiesComponent } from './pages/enemies/enemies.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'characters', canActivate: [AuthGuard], component: CharactersComponent },
  { path: 'artifacts', canActivate: [AuthGuard], component: ArtifactsComponent },
  { path: 'enemies', canActivate: [AuthGuard], component: EnemiesComponent },
  { path: 'weapons', canActivate: [AuthGuard], component: WeaponsComponent },
  { path: 'builder', canActivate: [AuthGuard], component: BuilderComponent },
  { path: 'builds', canActivate: [AuthGuard], component: BuildsComponent },
  { path: '', pathMatch: "full", redirectTo: "home" },
  { path: '**', pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
