import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootChildOneComponent } from './root-child-one/root-child-one.component';
import { RootChildTwoComponent } from './root-child-two/root-child-two.component';
import { RootChildOneChildOneComponent } from './root-child-one/root-child-one-child-one/root-child-one-child-one.component';
import { RootChildOneChildTwoComponent } from './root-child-one/root-child-one-child-two/root-child-one-child-two.component';
import { RootChildTwoChildTwoComponent } from './root-child-two/root-child-two-child-two/root-child-two-child-two.component';
import { RootChildTwoChildOneComponent } from './root-child-two/root-child-two-child-one/root-child-two-child-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RootChildOneComponent,
    RootChildTwoComponent,
    RootChildOneChildOneComponent,
    RootChildOneChildTwoComponent,
    RootChildTwoChildTwoComponent,
    RootChildTwoChildOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
