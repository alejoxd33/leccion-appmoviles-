import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'estudiante', component: EstudianteComponent },
  { path: '', component: InicioComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
