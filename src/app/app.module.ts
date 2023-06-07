import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SimoAnimationComponent } from './components/simo-animation/simo-animation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FatButComponent } from './fat-but/fat-but.component';


@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    SimoAnimationComponent,
    SidenavComponent,
    FatButComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
