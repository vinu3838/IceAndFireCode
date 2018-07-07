import { Component, OnInit } from '@angular/core';
import { InfoDetailsService } from '../info-details.service';
//import { FilterPipe} from '../pipe_search';
//import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // GetDetails(url: string)
  // {
    
  //   console.log(url);
  //   this.route.navigateByUrl(`Information/${url}`);
  // }
   details=[];
  constructor(public infoBook: InfoDetailsService, public route:Router) { }

  ngOnInit() {

   this.details=  this.infoBook.getInfo();

 console.log(this.details);


}


  }


