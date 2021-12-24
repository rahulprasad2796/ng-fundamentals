//npm i toastr --save
//import css and js files links in angular.json

//import { Injectable } from "@angular/core";

//declare let toastr
//still global but limited to this class

// @Injectable()
// export class ToastrService{
//     success(message: string, title?:string){
//         toastr.success(message,title)
//     }
//     info(message: string, title?:string){
//         toastr.info(message,title)
//     }warning(message: string, title?:string){
//         toastr.warning(message,title)
//     }error(message: string, title?:string){
//         toastr.error(message,title)
//     }
// }

import { InjectionToken } from "@angular/core";

//declare let toastr:any

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
    success(msg:string,title?:string):void;
    info(msg:string,title?:string):void;
    warning(msg:string,title?:string):void;
    error(msg:string,title?:string):void;
}