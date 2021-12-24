import { Directive } from "@angular/core";
//must be added to NG_VALIDATORS
import { FormGroup, Validator,NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector:'[validateLocation]',
    providers:[{provide:NG_VALIDATORS,useExisting:LocationValidator,multi:true}]
    //adds this validator service to the list of NG_VALIDATORS
})
export class LocationValidator implements Validator{
    //here {[key:string]:any} is return type
    validate(formGroup:FormGroup):{[key:string]:any}{
        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']
        //to get to a node up (<FormGroup>formGroup.root)
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
            return null
        }else{
            return {validateLocation:false}
        }
    }
}