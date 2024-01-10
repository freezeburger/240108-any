import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '@shared';
import { CoreModule } from '@core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


// Lazy Loaded
/*
import { ProductModule } from './product/product.module';
import { PostModule } from './post/post.module';
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    // Features

    // Lazy Loaded
    // ProductModule,
    // PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
