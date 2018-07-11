import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoDetailsService } from '../info-details.service';
import {Location} from '@angular/common';




@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})

export class ViewInfoComponent implements OnInit {

  public url;
  constructor(public route:Router,public activeRote:ActivatedRoute,
    public Info: InfoDetailsService, public location:Location) { }
   
 details=[];

 Back()
 {
this.location.back();

 }
 Home()
 {

  this.route.navigateByUrl('');
 }

  ngOnInit() {
    
    this.activeRote.params.subscribe( params => {
      this.url= params['url'];
     // console.log(this.url);

      this.details=this.Info.getDetails(this.url);
      
     // console.log(this.details);
     
    
    })
  }

}
