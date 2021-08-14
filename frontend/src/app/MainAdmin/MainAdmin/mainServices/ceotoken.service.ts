import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CeotokenService {

  public iss = {
    login: "http://localhost:8004/api/login",
    signup: "http://localhost:8004/api/signup",
  }

  constructor() { }

  handle(token: any){
    this.set(token)
  }

  set(token: string){
    localStorage.setItem('managertoken', token)
  }

  get(){
    return localStorage.getItem('managertoken')
  }

  remove(){
    localStorage.removeItem('managertoken')
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ?true : false;
      }
    }
    return false;
  }

  payload(token: string){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: string){
    return JSON.parse(atob(payload))
  }

  loggedIn(){
      return this.isValid();
  }

}
