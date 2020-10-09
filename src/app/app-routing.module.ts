import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { HeadComponent } from './components/head/head.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { PrefacturaComponent } from './components/prefactura/prefactura.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'head', component: HeadComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'registros', component: RegistrosComponent },
  { path: 'prefactura', component: PrefacturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
