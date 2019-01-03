import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getTask();
  }

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/dbtask/collections/Task';

  readonly param = new HttpParams().set('apiKey', 'dc6LDJaQtts3N4VH83RSXN3a0l2Mmthb');

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.param });
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, { params: this.param }).subscribe();
  }
}
