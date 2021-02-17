import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { TableComponent } from '../table/table.component';
import { HomeComponent } from '../home/home.component';
import { UserPreferenceComponent } from '../user-preference/user-preference.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'navhome', component: HomeComponent },
      { path: 'navtable', component: TableComponent},
      { path: 'navsettings', component: UserPreferenceComponent },
    ]
  }
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class TabModule { }
