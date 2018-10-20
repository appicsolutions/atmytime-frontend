// This file is not imported anywhere

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, LayoutComponent]
})
export class UiModule { }
