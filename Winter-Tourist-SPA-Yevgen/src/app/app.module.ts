import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ContentBestComponent } from './content-best/content-best.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentAfterBestComponent } from './content-after-best/content-after-best.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    NavigationComponent,
    HeroComponent,
    ContentBestComponent,
    HomePageComponent,
    ContentAfterBestComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
