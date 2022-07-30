import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // const routes: Routes = [];

  public	loginValue!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService , private _http : HttpClient, public router22: Router) {}

  ngOnInit(): void {

    this.loginValue = this.formBuilder.group({
      // name: [''],
      email: [''],
      mobile: ['']
      // address: [''],
      // service: [''],
});

  }

 // login 

         login(){
          this._http.get<any>("http://localhost:3000/posts").subscribe(res=>{
            const restaurent = res.find((a:any)=>{
              return a.email  === this.loginValue.value.email  && a.mobile  === this.loginValue.value.mobile
            });
            if(restaurent){
              alert("Login Success");
              this.router22.navigate(['restaurent']);
            }else{
              alert("user not found!!");
            }
          },err=>{
            alert("error");
          
          })
        }

}
