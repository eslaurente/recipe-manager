import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  declarations: [NavMenuComponent],
  exports: [
    CoreRoutingModule,
    CommonModule,
    NavMenuComponent
  ]
})
export class CoreModule { }
