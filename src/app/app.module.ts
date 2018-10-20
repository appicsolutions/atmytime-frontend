import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './service/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './shared/alert/alert.component';

import { AuthenticationService } from './service/authentication.service';
import { AlertService } from './service/alert.service';
import { UserService } from './service/user.service';
import { MyTimeComponent } from './my-time/my-time.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent,
    LogoutComponent,
    MyTimeComponent,
    MyScheduleComponent,
    NotificationsComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    // UiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ServiceModule,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
