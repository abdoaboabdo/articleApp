import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpModule } from '@angular/http';
import { ArticleServiceService } from './article-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavCompComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [
    ArticleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
