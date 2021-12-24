import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared/index";

//this component receives data from events-list.compomnent.ts

@Component({
    selector:"event-thumbnail",
    template:`
    <div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
    <!-- in above adding routing use single qoutes like '/events'-->
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:"shortDate"}}</div>

        <!--<div [ngSwitch]="event?.time" [class.green]="event?.time === '8:00 am'"> -->
        <!-- or using [ngClass] if having multiple classes -->

        <!--<div [ngSwitch]="event?.time" [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">-->

        <!--<div [ngSwitch]="event?.time" [ngClass]="getStartTimeClass()">-->

        <div [ngSwitch]="event?.time" [ngStyle]="getStartTimeStyle()">



        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        </div>

        <div>Price: {{event?.price | currency:"USD"}}</div>
        <div *ngIf="event?.location">
        <!-- hidden is a dom property and can be use like this in above scenario [hidden]="!event?.location", and same can be done for onlineUrl -->
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>-->
        <div *ngIf="event?.onlineUrl" >Online URL: {{event?.onlineUrl}}</div>
    </div>
    `,
    styles: [`.pad-left{ margin-left:10px; }
    .well div { color: #bbb; }
    .thumbnail { min-height: 210px; }
    //.green { color: #003300 !important; }
    //.bold { font-weight: bold; }
    `]
    //the styles will work only in own component, not in parent if has same name class
})

export class EventsThumbnailComponent{
    @Input() event:IEvent

    //eventClick named here has to match the parentcomponent template event
    @Output() eventClick = new EventEmitter()

    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }

    logfoo(){
        console.log("foo");
    }

    someProperty: string = "some Value";         

    getStartTimeClass(){
        //const isEarlyStart = this.event && this.event.time === "8:00 am";
        //or
        if(this.event && this.event.time === "8:00 am"){
            //return "green bold"
            //or
            return ["green bold"]
        }
        //return "";
        //or
        return []
    }

    getStartTimeStyle() : any {
        if(this.event && this.event.time === "8:00 am"){
            return {color: "#003300", "font-weight":"bold"}
        }
        return {}
    }
}