import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from "primeng/sidebar";
import {MenuModule} from "primeng/menu";
import {DividerModule} from "primeng/divider";
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SplitterModule} from "primeng/splitter";
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MenuModule,
    DividerModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
