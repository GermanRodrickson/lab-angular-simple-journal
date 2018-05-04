import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { JournalEntriesService } from './services/journal-entries.service';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: EntryListComponent },
  { path: "entry/:id", component: SingleEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
