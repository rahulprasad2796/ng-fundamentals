import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/index";

@Component({
    // template:`
    // <h1>New Event</h1>
    // <hr/>
    // <div class="col-md-6">
    // <h3>[Create Event Form will go here]</h3>
    // <br/>
    // <br/>
    // <button type="submit" class="btn btn-primary">Save</button>
    // <button type="button" class="btn btn-default" (click)="cancel()" >Cancel</button>
    // </div>
    // `


    //template-based-form

    templateUrl:"./create-event.component.html",
    styles:[`
        em {float:right; color:#E05C65; padding-left:10px;}
        .error input {background-color:#E3C3C5}
        .error :: -webkit-input-placeholder {color:#999}
        .error :: -moz-placeholder {color:#999}
        .error :-moz-placeholder {color:#999}
        .error :ms-input-placeholder {color:#999}
        `]
})
export class CreateEventComponent{
    newEvent
    isDirty:boolean = true
    //if set to false then the canDeactivate route guard will not work
    constructor(private router:Router, private eventService:EventService){

    }
    cancel(){
        this.router.navigate(['/events'])
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues).subscribe(()=>{
            this.isDirty = false
            this.router.navigate(['/events'])
        })
    }
}