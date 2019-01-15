import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; // not used???
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  // in order to access the properties and methods defined in our dataservice, we create an instance of it 
  constructor(private temp: DataService) { }

  ngOnInit() {
   // this.temp.getUsers().subscribe(
    //  data => this.users$ = data // if success, 

      let self = this;

      this.temp.getUsers().subscribe(function (data){
        self.users$ = data
      }
      

    );
  }

}
