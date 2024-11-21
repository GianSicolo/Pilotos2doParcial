import { RouterModule, Routes } from '@angular/router';
import { FormPilotosComponent } from './components/form-pilotos/form-pilotos.component';
import { ListpilotosComponent } from './components/listpilotos/listpilotos.component';
import { DetallesPilotosComponent } from './components/detalles-pilotos/detalles-pilotos.component';

export const routes: Routes = [
    { path: 'formulario', component: FormPilotosComponent },
    { path: 'lista', component: ListpilotosComponent },
    { path: 'detalle/:id', component: DetallesPilotosComponent },
    { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];
