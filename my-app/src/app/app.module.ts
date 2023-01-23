import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { CounterparentComponent } from './counterparent/counterparent.component';
import { CountersActionsComponent } from './counters-actions/counters-actions.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component'
import {StoreModule} from '@ngrx/store'
import { counterReducer} from '../app/Store/counterReducers'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CounterparentComponent,
    CountersActionsComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({Counter: counterReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 