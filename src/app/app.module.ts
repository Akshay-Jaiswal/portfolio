import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    SkillsComponent,
    HomeComponent,
    ProjectsComponent,
    AboutmeComponent,
    ContactComponent,
    BlogComponent
    ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'skills',
        component:SkillsComponent
      }
      ,
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'aboutme',
        component:AboutmeComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'blog',
        component:BlogComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
