import { Component, OnInit } from '@angular/core';
import { UserListService } from '../Service/user-list.service';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {
  searchInput = '';
  selectedUser;
  constructor(private userservice: UserListService) { 
    this.userservice.setuser.subscribe(res => {
        this.selectedUser = res;
      });

  }

  ngOnInit() {
  }
  changeinput(){
    this.userservice.searchnameparent(this.searchInput);
  }
}
