import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { UserPreferenceComponent } from './user-preference/user-preference.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'table', component: TableComponent },
  { path: 'settings', component: UserPreferenceComponent },
  { path: 'navigation', loadChildren: ()=> import('./tab/tab.module').then(m => m.TabModule)},
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
