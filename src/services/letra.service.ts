import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class LetraService {

  constructor(
    private http : HttpClient
  ) { }


  public url : any = GeneralService.WS_URL + "letra/";

  listar() : any 
  {
    const headers = new HttpHeaders(GeneralService.HEADERS('application/json'));
      return this.http.get(this.url + 'listar', {headers : headers}); 
    }
  }
