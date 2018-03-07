import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';


import { PageNotFoundComponent } from './shared/notFound/pageNotFound.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WaypointsDashboardComponent } from './waypoint/dashboard.component';
import { WaypointsListComponent } from './waypoint/list.component';
import { NewWaypointComponent } from './waypoint/new.component';
import { ToursDashboardComponent } from './tour/dashboard.component';
import { ToursListComponent } from './tour/list.component';
import { NewTourComponent } from './tour/new.component';
import { DriverDispatchComponent } from './driver/dispatch.component';
import { DriversListComponent } from './driver/list.component';



const app_routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent},
      { path: 'waypoints', pathMatch: 'full', component: WaypointsDashboardComponent},
      { path: 'tours', pathMatch: 'full', component: ToursDashboardComponent},
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }  // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
    HeaderComponent,
    HomeComponent,
    WaypointsDashboardComponent, WaypointsListComponent, NewWaypointComponent,
    ToursDashboardComponent, ToursListComponent, NewTourComponent,
    DriverDispatchComponent, DriversListComponent
  ];
}
