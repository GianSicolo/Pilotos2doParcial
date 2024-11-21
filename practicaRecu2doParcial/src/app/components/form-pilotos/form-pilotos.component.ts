import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PilotosService } from '../../services/pilotos.service';
import { Router } from '@angular/router';
import { Pilotos } from '../../interfaces/pilotos';

@Component({
  selector: 'app-form-pilotos',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-pilotos.component.html',
  styleUrl: './form-pilotos.component.css'
})
export class FormPilotosComponent {

  
@Output()
  emitirPiloto = new EventEmitter<Pilotos>



fb = inject(FormBuilder);
servicioPiloto = inject(PilotosService);
router = inject(Router);

 formulario = this.fb.nonNullable.group({
    nombre:['',Validators.required],
    escuderiaDebut:['',Validators.required],
    escuderiaActual:['',Validators.required],
    anioDebut:[0,[Validators.min(1950),Validators.max(2024)]],
    grandesPremios:[0,Validators.required],
    cantPodios:[0,Validators.required],
    isActive:[false]
  })
  
guardarPiloto(event: any){
  const piloto = this.formulario.getRawValue();
 
this.servicioPiloto.addPiloto(piloto).subscribe({
  next: ()=>{
    alert ("se agrego correctamente");
  },
  error: (e: Error)=>{
    console.log(e.message);
  }
});
}

}
