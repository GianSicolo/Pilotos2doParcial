import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Pilotos } from '../interfaces/pilotos';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  constructor() { }
  private http = inject(HttpClient);
  private baseUrl = 'https//:localhost:3000/pilotos';


  getPiloto(): Observable<Pilotos[]>{
    return this.http.get<Pilotos[]>(this.baseUrl);
  }

  addPiloto(pilotos: Pilotos): Observable<Pilotos>{
    return this.http.post<Pilotos>(this.baseUrl,pilotos);
  }


  actualizarPiloto(id: string,pilotos: Pilotos): Observable<Pilotos>{
    return this.http.put<Pilotos>(`${this.baseUrl}/${id}`,pilotos);
  }

  eliminarPiloto(id: string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
