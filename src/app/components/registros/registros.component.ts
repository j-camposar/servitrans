import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  public formRegistros;
  constructor(
    private fr: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  buildForm() {
    this.formRegistros = this.fr.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
