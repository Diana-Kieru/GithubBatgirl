import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHoverDirective } from './card-hover.directive';
import { RepoComponent } from './repo/repo.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardHoverDirective,
    RepoComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
