import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoDetailsService {
 

 Information=[];
  allInfo=[];
  public getInfo()
  {
//this.allBooks= 
this.http.get('https://www.anapioficeandfire.com/api/books').subscribe(

data =>{
//console.log(data);
this.allInfo.push(data);
//console.log((this.allInfo));
//return this.allInfo;

}

)
this.http.get('https://www.anapioficeandfire.com/api/characters').subscribe(

data =>{
//console.log(data);
this.allInfo.push(data);
//return this.allInfo;

}

)
this.http.get('https://www.anapioficeandfire.com/api/houses').subscribe(

data =>{
//console.log(data);
this.allInfo.push(data);
//return this.allInfo;

}
)
console.log((this.allInfo));
return this.allInfo;
  }


  public getDetails(url:string)
  {
    console.log(url);
this.http.get(url).subscribe(
data =>{
  this.Information.pop();
//console.log(data);
 this.Information.push(data);
//console.log((this.allInfo));
//return this.allInfo;
},
error => {
alert("Error Occured");
this.route.navigateByUrl('');

}

)
console.log((this.Information));
return this.Information;
}



  constructor(public http:HttpClient, public route:Router) { }

 
  ngOnInit() {


  }


}
