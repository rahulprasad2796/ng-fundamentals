import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";
//import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


//the [event] is from event-thumbnail.component


//declare let toastr
//otherwise will throw error in handleThumnailClick
//global variables are not good
//cannot be tested
//toastr is not injected, so cannot be mocked

@Component({
    //not needed after adding routing
    //selector:"events-list",
    template:`
    <div>
    <h1>Upcomming Angular Events</h1>
    <hr />
    <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
    <event-thumbnail [event]="event"></event-thumbnail>
    </div>
    </div>

    <!--<event-thumbnail [event]="event1" (eventClick) = "handleEventClicked($event)" #thumbnail></event-thumbnail>-->
    <!--<button class="btn btn-primary" (click) = "thumbnail.logfoo()">LogFoo</button>-->
    <!--<h3>{{thumbnail.someProperty}}</h3>-->

    </div>
    `
})

export class EventsListComponent implements OnInit{
    //add implements OnInit for typescript implementation safety

    /*  handleEventClicked(data){
        console.log(data);        
    }
    */
   events:IEvent[]

    constructor(private eventService: EventService, private route:ActivatedRoute){

    }

    //the above constructor is shorthand which says that the eventService is property in class and this.eventService = EventService

    //component lifecycle hook - component is being loaded

    //the statement written inside ngOnInit can also be written in constructor

    ngOnInit(){
        //this.eventService.getEvents().subscribe(events=>{this.events = events})
        //already provided in event-list-resolve
        this.events = this.route.snapshot.data["events"]
    }

    // handleThumbnailClick(eventName){
    //     this.toastr.success(eventName)
    // }
}