import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { HeroService } from './shared/services/hero.service';

import { AppComponent } from './app.component';
import { HeroesTableComponent } from './heroes-table/heroes-table.component';
import { FilterHeroComponent } from './filter-hero/filter-hero.component';

import { ToPercentagePipe } from './shared/pipes/to-percentage.pipe';
import { ToApiSrc } from './shared/pipes/to-api-src.pipe';
import { DotaToolbarComponent } from './dota-toolbar/dota-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesTableComponent,
    FilterHeroComponent,
    ToPercentagePipe,
    ToApiSrc,
    DotaToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }