import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlantResponseInterface } from '../models/plant.interface';
import { TokenInterface } from '../models/token.inteface';
import { Observable } from 'rxjs/internal/Observable';

const path = 'plants';

//const token = 'gNSLzKChntOYvrCiES41ONrkCEkq0dPAC5QBMZ9_3qw';
//const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNTYsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCIsImlwIjpudWxsLCJleHBpcmUiOiIyMDIzLTAyLTI3IDIxOjI0OjM1ICswMDAwIiwiZXhwIjoxNjc3NTMzMDc1fQ.W9-VVCS4YWkAJuc-zQrozJxMjjmLWovBh2P8eOBaHVc';
let token: string;
let expiration: string;

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) {
    this.getNewToken();
  }

  getNewToken(): void {
    const tokenResponse: Observable<TokenInterface> = this.http.get<TokenInterface>('http://www.tacodemon.gay:666/trefle-token');
    tokenResponse.subscribe(data => {
      token = data.token;
      expiration = data.expiration;
    });
  }

  getPlants(): Observable<PlantResponseInterface> {
    return this.http.get<PlantResponseInterface>('https://trefle.io/api/v1/'+path+'?token='+'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNTYsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCIsImlwIjpudWxsLCJleHBpcmUiOiIyMDIzLTAyLTI4IDE5OjE3OjI0ICswMDAwIiwiZXhwIjoxNjc3NjExODQ0fQ.8wef3MPKoFeE3qtnsVmeoPfpICevjNPaqxZUf9jCUV4'+"&size=4", httpOptions);
  }
}