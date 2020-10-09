import { Component ,OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';
import * as $ from 'jquery';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent {
  title = 'servitrans';
  showFiller = false;
  constructor(private http: HttpClient,private router: Router) {
  
  } 


 private ngOnDestroy(): void {
  clearInterval(this.intervalUpdate);

 }
  public chart: any = null;
  private intervalUpdate: any = null;

  /**
  * Get the data from the API
  * @function getFromAPI
  * @return {Observable<any>}
  */
  private getFromAPI(): Observable<any>{
    return this.http.get(
      'http://localhost:3000',
      { responseType: 'json' }
    );
  }
  private OnInit():void{
    console.log("hola");
  
  }
}