import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//routing
import { appRoutes }                from './app.routing';

//components
import { AppComponent }             from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
