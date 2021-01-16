import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'searchinput',
    component: SearchInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
