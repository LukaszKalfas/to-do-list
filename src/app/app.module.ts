import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './Routing/RoutingModule';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DetailsDirective } from '../shared/details.directive';
import { ButtonDetailsDirective } from '../shared/button-details.directive';
import { DoneDetailsDirective } from '../shared/done-details.directive';
import { UpdateDirective } from '../shared/update.directive';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    DetailsDirective,
    ButtonDetailsDirective,
    DoneDetailsDirective,
    UpdateDirective


  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [TaskService, HttpService, NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
