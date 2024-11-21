import { Component, inject, OnInit } from '@angular/core';
import { Pilotos } from '../../interfaces/pilotos';
import { PilotosService } from '../../services/pilotos.service';
import { FormPilotosComponent } from '../form-pilotos/form-pilotos.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listpilotos',
  standalone: true,
  imports: [FormPilotosComponent, ReactiveFormsModule],
  templateUrl: './listpilotos.component.html',
  styleUrl: './listpilotos.component.css'
})
export class ListpilotosComponent implements OnInit{
ngOnInit(): void {
  
}
servicioPiloto = inject(PilotosService);

piloto: Pilotos[] = [];

agregarPilotoLista(pilotoNuevo: Pilotos){
  this.piloto.push({...pilotoNuevo});
}

listarPilotos(){
  this.servicioPiloto.getPiloto().subscribe({
    next: (pilotos: Pilotos[])=>{
      pilotos = this.piloto;
    },
    error: (e: Error)=>{
      console.log(e.message);
      alert("Error al cargar");
    }
  })

}


}
