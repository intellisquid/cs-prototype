import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'addentry', component: AddEntryComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
