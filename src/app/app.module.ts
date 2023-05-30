import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { NoPageFoundComponent } from './Components/no-page-found/no-page-found.component';
import { FeaturesComponent } from './Components/features/features.component';
import { FooterComponent } from './Components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    NoPageFoundComponent,
    FeaturesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
