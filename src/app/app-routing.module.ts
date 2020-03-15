import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { MainIndicatorsComponent } from './components/main-indicators/main-indicators.component';


const routes: Routes = [
  { path: '', component: MainNavigationComponent},
  { path: 'home', component: MainHomeComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'indicators', component: MainIndicatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
