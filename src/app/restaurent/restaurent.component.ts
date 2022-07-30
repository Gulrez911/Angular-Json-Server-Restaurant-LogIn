import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.modal';


@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css'],
})
export class RestaurentComponent implements OnInit {
		formValue!: FormGroup;
	// public	loginValue!: FormGroup;

		restaurentModelObj: RestaurentData = new RestaurentData();
		
		allRestarantData : any=[] ;
   
    btnUpdateShow:boolean = false;

    btnSaveShow:boolean = true;


  constructor(private formBuilder: FormBuilder, private api: ApiService , private _http : HttpClient) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
});
this.getAllData()

  }

  // New subercibe out data which us  maped vua Sercies...
  addResto() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.service = this.formValue.value.service;

    this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
	console.log(res);
	alert("Save Successfully");
	this.formValue.reset()
  this.getAllData()
    },
    err=>{
	alert("Oppss");
    }
    )
  }
// Get all Data
getAllData(){
	this.api.getRestaurant().subscribe(res=>{
		this.allRestarantData= res;
	})
}

// Delete
deleteRestaurent(data:any){
	this.api.deleteRestaurent(data.id).subscribe(res => {
	  alert("Record Deleted");
	  this.getAllData();
	})
  
    }



    editRestaurent(data:any){
	this.formValue.controls['name'].setValue(data.name);
	this.formValue.controls['email'].setValue(data.email);
	this.formValue.controls['mobile'].setValue(data.mobile);
	this.formValue.controls['address'].setValue(data.address);
	this.formValue.controls['service'].setValue(data.service);
	this.restaurentModelObj.id = data.id;
	this.UpdateShowBtn();
    }
  
    UpdateStudent(){
      this.restaurentModelObj.name = this.formValue.value.name;
      this.restaurentModelObj.email = this.formValue.value.email;
      this.restaurentModelObj.mobile = this.formValue.value.mobile;
      this.restaurentModelObj.address = this.formValue.value.address;
      this.restaurentModelObj.service = this.formValue.value.service;
      this.api.putRestaurent(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res => {
        alert("Data Updated");
        this.getAllData();
        this.SaveShowBtn();
      })
  
    }
  
UpdateShowBtn()
{
  this.btnUpdateShow = true;
  this.btnSaveShow = false;
}
SaveShowBtn()
{
  this.btnUpdateShow = false;
  this.btnSaveShow = true;
}

 // login 

        //  login(){
        //   this._http.get<any>("http://localhost:3000/login").subscribe(res=>{
        //     const restaurent = res.find((a:any)=>{
        //       return a.ma
        //     }
        //   })
        // }
  



}
