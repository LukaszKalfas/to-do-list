import { DoneTaskComponent } from '../done-task/done-task.component';
import { ToDoTaskComponent } from '../to-do-task/to-do-task.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/toDoTask', pathMatch: 'full' },
  { path: 'toDoTask', component: ToDoTaskComponent, data: {animation: {page: 'rootPage'}} },
  { path: 'doneTask', component: DoneTaskComponent, data: {animation: {page: 'donePage'}} },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot( appRoutes )]
})
export class RoutingModule {}
