import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule
  ],

  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule
  ],

  declarations: [],

  providers: [],
})
export class SharedMaterialModule { }
