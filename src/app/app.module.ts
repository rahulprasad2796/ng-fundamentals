import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from "./events/index"

import { EventsAppComponent } from './events-app.component';
import { NavBarCOmponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { TOASTR_TOKEN,Toastr,JQ_TOKEN,CollapsibleWellComponent,SimpleModalComponent,ModalTriggerDirective } from './common';

let toastr:Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarCOmponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [EventService,{provide:TOASTR_TOKEN,useValue:toastr},{provide:JQ_TOKEN,useValue:jQuery},EventResolver,{provide:"canDeactivateCreateEvent",useValue:checkDirtyState},EventListResolver,AuthService,VoterService],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm("You have not saved the event, do you really want to cancel?")
  }
  return true
}