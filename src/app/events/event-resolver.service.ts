import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";


@Injectable()
export class EventResolver{
    constructor(private eventService:EventService){}

    resolve(route:ActivatedRouteSnapshot){
        return this.eventService.getEvent(route.params['id'])
    }
}