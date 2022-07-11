import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }


  submit(): void{
    //console.log(this.form.getRawValue());
    //let token;
    
    this.http.post('https://flightlog-backend.herokuapp.com/user/authenticate', this.form.getRawValue(), {withCredentials: true})
      .subscribe((res:any) => {console.log(res)
        localStorage.setItem('token',(res.accessToken))}, err => alert(err.message));
    //.subscribe(()=> this.router.navigate(['/']));
    //.subscribe(res => {token = res; return token;});

    this.http.post('https://flightlog-backend.herokuapp.com/user/authenticate', this.form.getRawValue(), {withCredentials: true})
      .subscribe(() => this.router.navigate(['/auth-home']));


  }

}
