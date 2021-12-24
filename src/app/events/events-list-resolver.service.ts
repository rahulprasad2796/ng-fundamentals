//resolve rote handler - to wait data to load before displaying the component

import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from "rxjs/operators"

@Injectable()
export class EventListResolver{
    constructor(private eventService:EventService){

    }

    resolve(){
        //return this.eventService.getEvents().pipe(map(events=>events))
        //instead of pipe, subscribe would have been used to listen to observable
        //but this is in resolver, we need to return observable to angular so that it sees when it finishes
        //if we use subscribe here the value returned will not be observable
        //as subscribe returns subscription not observable
        
        //when using with server
        return this.eventService.getEvents()
    }
}