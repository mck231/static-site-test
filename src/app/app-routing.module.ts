import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StoreComponent } from './features/store/store.component';
import { RouteGuardService } from './core/route-guard/route-guard.service';


const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'home', component: HomeComponent },
{ path: 'store', component: StoreComponent , canDeactivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
