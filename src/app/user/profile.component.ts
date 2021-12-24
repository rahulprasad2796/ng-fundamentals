import { Component, OnInit,Inject } from '@angular/core'
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { TOASTR_TOKEN,Toastr } from '../common/toastr.service'
import { AuthService } from './auth.service'


//module driven form
//it uses ReactiveFormsModule rather than template driven which uses FormModule

@Component({
  // template: `
  // <!--
  //   <h1>Edit Your Profile</h1>
  //   <hr>
  //   <div class="col-md-6">
  //     <h3>[Edit profile form will go here]</h3>
  //     <br />
  //     <br />
  //     <button type="submit" class="btn btn-primary">Save</button>
  //     <button type="button" class="btn btn-default">Cancel</button>
  //   </div>
  //   -->
  // `,
  templateUrl:"./profile.component.html",
  styles:[`
  em {float:right; color:#E05C65; padding-left:10px;}
  .error input {background-color:#E3C3C5}
  .error :: -webkit-input-placeholder {color:#999}
  .error :: -moz-placeholder {color:#999}
  .error :-moz-placeholder {color:#999}
  .error :ms-input-placeholder {color:#999}
  `]
})
export class ProfileComponent implements OnInit{
  constructor(private authService:AuthService,private router:Router,@Inject(TOASTR_TOKEN) private toastr:Toastr){}
    profileForm:FormGroup
    private firstName:FormControl
    private lastName:FormControl

    ngOnInit(){
      this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required, Validators.pattern("[a-zA-Z].*")])
      this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required)
      this.profileForm = new FormGroup({
        firstName:this.firstName,
        lastName:this.lastName
      })
    }

    cancel(){
      this.router.navigate["events"]
    }

    saveProfile(formValues){
      if(this.profileForm.valid){
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
          .subscribe(()=>{
            this.toastr.success('Profile Saved')
          })
        //this.router.navigate["events"]
      }
    }

    logout(){
      this.authService.logout().subscribe(()=>{
        this.router.navigate(['/user/login'])
      })
    }

    validateLastName(){
      return this.lastName.valid || this.lastName.untouched
      //using valid here to reverse the order so 
    }

    validateFirstName(){
      return this.firstName.valid || this.firstName.untouched
    }
}