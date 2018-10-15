import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { NoteComponent }   from './note.component';
import { NotFoundComponent }   from './not-found.component';


const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'note', component: NoteComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
                    AppComponent, HomeComponent,
                    NoteComponent, NotFoundComponent
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
