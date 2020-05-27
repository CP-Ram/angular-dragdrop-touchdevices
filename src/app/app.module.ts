import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeModule } from 'angular-tree-component';
import { FulltreeComponent } from './fulltree/fulltree.component';
import { Fulltree2Component } from './fulltree2/fulltree2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, TreeModule.forRoot()],
  declarations: [ AppComponent, FulltreeComponent, Fulltree2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 
}
