import { CeotransportService } from './../../MainAdmin/MainAdmin/mainServices/ceotransport.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeotokenService } from 'src/app/MainAdmin/MainAdmin/mainServices/ceotoken.service';
import { CeoserviceService } from 'src/app/MainAdmin/MainAdmin/mainServices/ceoservice.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    public api: CeotransportService,
    public router: Router,
    public token: CeotokenService,
    public Auth: CeoserviceService,
  ) { }

  password:any;

  show = false;

  showprogress = false;

  model:any = {};

  public error = null;

  ngOnInit(): void {
    document.body.style.backgroundColor = "#424242";
    this.password = "password";
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  submitDetails(){
      this.showprogress = true;
      this.api.loginManager(this.model).subscribe((data:any) => {
        if (data) {
          this.handleLogin(data);
          this.showprogress = false;
          localStorage.setItem("Manager", JSON.stringify(data));
        }
      }, error => {
        this.showprogress = false;
        this.handleError(error)
      })    
  }

  handleLogin(data:any){
    this.token.handle(data.access_token);
    this.Auth.changeAutho(true);
    this.router.navigate(['/managersidenav/managerdashboard'])
  }
  
  handleError(error:any){
    this.error = error.error.error;
    if(error){
      this.model.password = "";
    }
}

}
