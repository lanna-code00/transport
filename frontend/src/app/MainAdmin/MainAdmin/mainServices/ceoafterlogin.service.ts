import { Observable } from 'rxjs';
import { CeotokenService } from './ceotoken.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CeoafterloginService implements CanActivate {

  constructor(
    private token: CeotokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    return this.token.loggedIn();
  }
}
