import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector:"upvote",
    styleUrls:['./upvote.component.css'],
    template:`
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse voting-count">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `
})
export class UpvoteComponent {
    iconColor: string
    @Input() count: number
    @Input() set voted(val){
        this.iconColor = val ? "red" : "white"
    }
    @Output() vote = new EventEmitter()

    onClick(){
        this.vote.emit({})
    }
}