import { Injectable , EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  setuser = new EventEmitter();
  searchname = new EventEmitter();
  constructor(private http: HttpClient) {

   }
   getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  setparentuser(data){
    this.setuser.emit(data);
  }
  searchnameparent(name){
    this.searchname.emit(name)

  }
}
