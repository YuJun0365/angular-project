import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userlist: any;

  constructor(private service: MasterService, private http: HttpClient, private router: Router, private location: Location , private formBuilder: FormBuilder) { 
    this.service.GetUser().subscribe(result=>{
      this.userlist=result;
    });
  }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ''
    });
  }

  submit(): void{
    //let currentUrl = this.router.url;
    console.log(this.form.getRawValue())
    this.service.DeleteUser(this.form.getRawValue().id)
    .subscribe(()=> this.reload())
    //.subscribe(() => this.router.navigateByUrl('/user',
    //{skipLocationChange:true}).then(() => this.router.navigate[currentUrl]));
  }

  reloadComponent(){
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl])
  }

  reload(){
    window.location.reload();
  }


  getToken() {
    return localStorage.getItem('token')
  }


}
function currentUrl(currentUrl: any, string: any) {
  throw new Error('Function not implemented.');
}

