import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './shared/shared.module';
import { AppCoreModule } from './core/core.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { ApplicationService } from './shared/services/application.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MomentModule,

    AppRoutingModule,
    AppSharedModule,
    AppCoreModule
  ],
  providers: [DatePipe, { provide: APP_BASE_HREF, useValue: '/' }, ApplicationService, Title ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [NotesListComponent, NotesDetailComponent]
})
export class AppModule { }
