import { Component, OnInit } from '@angular/core';
declare let $: any;
import {UserListService} from '../Service/user-list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  data;
  public name:any = '';
  aa:boolean=false;


 
  constructor(private userservice: UserListService) { 
    this.userservice.searchname.subscribe(res=>{
      this.name = res;
    })
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      this.data = res;
    });
  
  }
  setIndex(ii){
    this.aa=ii;
    console.log
  }
  setvalue(data){
    this.userservice.setparentuser(data);
  }



}
