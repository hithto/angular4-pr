import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //

// import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroService }         from './hero/hero.service';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    // ])
  ],
  // 添加HeroService到AppModule的providers数组中，因为我们的每一个视图都需要它。
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
