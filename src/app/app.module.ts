import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MySiteComponent } from './my-site/my-site.component';
import { MyInfoComponent } from './minisites/my-info/my-info.component';
import { MyCareerComponent } from './minisites/my-career/my-career.component';
import { MySkillsComponent } from './minisites/my-skills/my-skills.component';
import { MyProjectsComponent } from './minisites/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MySiteComponent,
    MyInfoComponent,
    MyCareerComponent,
    MySkillsComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
