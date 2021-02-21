import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import { HackerNewsAPIService } from './hackernews-api.service';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,HeaderComponent,StoriesComponent,ItemComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  exports: [
    HeaderComponent,
    StoriesComponent,
    ItemComponent,
    HackerNewsAPIService
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HackerNewsAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
