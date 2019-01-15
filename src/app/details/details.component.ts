import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  userId: String;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( returnData => this.userId = returnData.papi)
    console.log('Id Param: ' + this.userId);
  }

  ngOnInit() {
    this.data.getUser(this.userId).subscribe(
      data => this.user$ = data
    )
  }

}
