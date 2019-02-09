import { HomeComponent } from './home.component';
import { CommonUsedModule } from '../shared/common-module/common-module.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared/material/material.module';

/**
 * Body Module. 
 * FormsModule is for 2 way binding, common module is for ngIf and ngFor.
 * 
 */
@NgModule({
  imports: [
    CommonUsedModule,
    RouterModule,
    SharedMaterialModule
  ],

  exports: [
    HomeComponent
  ],

  declarations: [
    HomeComponent
  ],

  providers: [],
})
export class HomeModule { }
