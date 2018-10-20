import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTimeComponent } from './my-time/my-time.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  // menu and sidebar layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'my/time', component: MyTimeComponent, canActivate: [AuthGuard] },
      { path: 'my/schedule', component: MyScheduleComponent, canActivate: [AuthGuard] },
      { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
    ]
  },

  // no layout routes
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
