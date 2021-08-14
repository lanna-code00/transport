import { Injectable } from '@angular/core';
import { CeotokenService } from './ceotoken.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeoserviceService {
  public loggedIn = new BehaviorSubject <boolean>(this.token.loggedIn());
  authO = this.loggedIn.asObservable();
  constructor(private token: CeotokenService) { }
    changeAutho(value: boolean){
      this.loggedIn.next(value)
    }
}
