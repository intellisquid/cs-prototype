import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryService } from './entryservice/EntryService';
import { EntryListComponent } from './entry-list/entry-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEntryComponent,
    HomeComponent,
    ContactComponent,
    EntryDetailComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
