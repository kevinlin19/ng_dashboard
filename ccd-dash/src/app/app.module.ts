import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
// import { PostsComponent } from './modules/posts/posts.component';
// import { HeaderComponent } from './shared/component/header/header.component';
// import { FooterComponent } from './shared/component/footer/footer.component';
// import { SidebarComponent } from './shared/component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    DefaultModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
