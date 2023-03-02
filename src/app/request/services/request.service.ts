import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlantResponseInterface } from '../models/plant.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<PlantResponseInterface> {
    return this.http.get<PlantResponseInterface>("http://localhost:3000/data");
  }
}