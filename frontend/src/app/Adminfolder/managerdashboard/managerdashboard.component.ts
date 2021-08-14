import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
    );
    
    image:any;

    imagelink = "../../../../../MainAdmin/public/storage/images/";
    // imagelink = " http://localhost:4200/MainAdmin/public/storage/images/Capture1627569657.JPG"

    constructor(private breakpointObserver: BreakpointObserver) {}
    
    ngOnInit(): void {
       let manager = JSON.parse(localStorage.Manager).user.profilepic || [];
       this.image = manager;
    }


}
