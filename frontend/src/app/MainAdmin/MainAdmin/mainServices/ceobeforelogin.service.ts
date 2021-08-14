import { CeotokenService } from './ceotoken.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CeobeforeloginService {
  constructor(
    private token: CeotokenService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    return !this.token.loggedIn();
  }


}
