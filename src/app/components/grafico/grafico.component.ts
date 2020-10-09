import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import * as $ from 'jquery';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  public formGrafico;
  constructor(
    private fb: FormBuilder,private router2: Router
  ) { }
  public chart: any = null;
  private intervalUpdate: any = null;
/**
   * Print the data to the chart
   * @function showData
   * @return {void}
   */
  private showData(): void {
    this.chart = new Chart('realtime', {
      // The type of chart we want to create
      type: 'pie',
     
      // The data for our dataset
      data : {
          datasets: [{
              data: [10, 20, 30,20],
              backgroundColor: [
                  '#27B497',
                  '#3C81BF',
                  '#F34A56',
                  '#3C3AB5'
              ],
          }],
         
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
              'asim ilables domiciliarios',
              'Reciclaje Carton',
              'Reciclaje Vidrio',
              'Reciclaje Pet'
          ]
      },
      options:{ 
        title: {
          display: true,
          text: 'Ventas'
        },
        legend: {
          display: true,
          labels: {
            fontColor: 'black'
          },
          position: 'right'
          }
      }
  });
}


  ngOnInit(): void {
      this.showData();
  
  }

  buildForm() {
    this.formGrafico = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
}
