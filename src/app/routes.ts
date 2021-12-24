//typescript definition provided by angular
//provides extraIntellisense and compile time safety\

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
  } from "./events/index"

import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";


export const appRoutes:Routes = [
    {path: "events/new",component:CreateEventComponent, canDeactivate:["canDeactivateCreateEvent"]},
//router otherwise gets confused
    {path: "events", component:EventsListComponent, resolve:{events:EventListResolver}},
    {path: "events/:id", component:EventDetailsComponent,resolve:{event:EventResolver}},
    {path: "events/session/new", component:CreateSessionComponent},
    {path: "404",component:Error404Component},  
    {path: "", redirectTo:"/events",pathMatch:"full"},
    //pathMatch: full/prefix
    //prefix - if url starts with specified path string
    //full - url in full
    {
        path:"user",
        loadChildren: () => import("./user/user.module")
        .then(m => m.UserModule)
    }
    //lazy loading a module
]

//remember to add in modules
//change the html element tag in main app component