import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CeotransportService {

  api:any = "http://localhost:8004/api/";

  constructor(private http: HttpClient) { }

  public managerReg (form: any){
      return this.http.post(`${this.api}signup`, form)
  }

  public loginManager(form: any){
    return this.http.post(`${this.api}login`, form)
  }

  public statesapi () {
    return this.http.get('https://nigerian-states-info.herokuapp.com/api/v1/states');
  }
}
