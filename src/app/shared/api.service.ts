import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // restaurentModelObj: RestaurentData = new RestaurentData();
  constructor(private _http:HttpClient) { }

//New here i wilklk define the GET, PUT, DELETE @
postRestaurant(data:any){
  return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
    return res;
  }))
}
// Get  Restaurent
// getRestaurant(data:any, id:number){
//   return this._http.get<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
//     return res;
//   }))
// }

// Get Method For All Student
getRestaurant()
{
  return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=> {
    return res
  }))
}

// Delete 
  // Delete Method For Update Student
  deleteRestaurent(id:number)
  {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res:any)=> {
      return res
    }))
  }

        // Put Method For Update Student
        putRestaurent(data:any, id:number)
        {
          return this._http.put<any>("http://localhost:3000/posts/" + id,data).pipe(map((res:any)=> {
            return res
          }))
        }


        // login 
        // login(){
        //   this._http.get<any>("http://localhost:3000/login").subscribe(res=>{
        //     const restaurent = res.find((a:any)=>{
        //       return a.ma
        //     }
        //   })
        // }

}
