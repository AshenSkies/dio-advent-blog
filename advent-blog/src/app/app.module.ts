import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { FeaturedLatestComponent } from './components/featured-latest/featured-latest.component';
import { ListLatestComponent } from './components/list-latest/list-latest.component';
import { BlockArticleComponent } from './components/block-article/block-article.component';
import { PersonalCurationComponent } from './components/personal-curation/personal-curation.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturedPostComponent,
    FeaturedLatestComponent,
    ListLatestComponent,
    BlockArticleComponent,
    PersonalCurationComponent,
    FooterBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
