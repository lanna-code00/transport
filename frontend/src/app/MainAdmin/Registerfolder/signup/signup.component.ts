import { CeotransportService } from './../../MainAdmin/mainServices/ceotransport.service';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Marital {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maritalstatus: any;
  selectedCar:any;
  states:any;

  version = VERSION;
  base64File:any = null;
  filename:any = null;
  
  filecv:any = null;
  cvName:any = null;
  file:any;
  myfile:any;

  model:any = {
    maritalStatus: null,
    state: null,
    stateE: null,
    randomID: Math.floor(1000 + Math.random() * 9000)
  };
  status: Marital[] = [
    {value: 'single', viewValue: 'Single'},
    {value: 'married', viewValue: 'Married'},
    {value: 'divorced', viewValue: 'Divorced'}
  ];

  statesArray:any = [];

  constructor(
    public api: CeotransportService,
    public fb: FormBuilder,
  ) { }


  ngOnInit(): void {
     this.api.statesapi().subscribe((data:any) => {
       this.statesArray = data.data;
     })
  }

  onFileSelect(e: any): void {
    try {
       this.file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(this.file)
      fReader.onloadend = (event: any) => {
        this.filename = this.file.name;
        this.base64File = event.target.result;
      }

    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }
  }

  UploadCv(e: any): void {
    try {
       this.myfile = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(this.myfile)
      fReader.onloadend = (event: any) => {
        this.cvName = this.myfile.name;
        this.filecv = event.target.result;
        console.log(this.cvName.replace("C:\\fakepath\\", ''));
      }

    } catch (error) {
      this.cvName = null;
      this.filecv = null;
      console.log('no file was selected...');
    }
  }


  submitDetails(){
    let myform = new FormData();
    myform.append('profilepic', this.file)
    myform.append('filescv', this.myfile)
    myform.append('firstname', this.model.firstname)
    myform.append('lastname', this.model.surname)
    myform.append('middlename', this.model.lastname)
    myform.append('email', this.model.email)
    myform.append('streetAddress', this.model.streetAddress)
    myform.append('city', this.model.city)
    myform.append('state', this.model.state)
    myform.append('zipcode', this.model.zipcode)
    myform.append('homephone', this.model.homephone)
    myform.append('alternatephone', this.model.alternatephone)
    myform.append('birthdate', this.model.birthdate)
    myform.append('maritalStatus', this.model.maritalStatus)
    myform.append('spousename', this.model.spousename)
    myform.append('spousephone', this.model.spousephone)
    myform.append('jobtitle', this.model.jobtitle)
    myform.append('worklocation', this.model.worklocation)
    myform.append('workemail', this.model.workemail)
    myform.append('salary', this.model.salary)
    myform.append('employeeID', this.model.randomID)
    myform.append('firstnameE', this.model.firstnameE)
    myform.append('lastnameE', this.model.lastnameE)
    myform.append('addressE', this.model.addressE)
    myform.append('cityE', this.model.cityE)
    myform.append('stateE', this.model.stateE)
    myform.append('zipcodeE', this.model.zipcodeE)
    myform.append('phoneE', this.model.phoneE)
    myform.append('relationship', this.model.relationship)
    myform.append('password', this.model.password)
    myform.append('password_confirmation', this.model.password_confirmation)

    this.api.managerReg(myform).subscribe((data:any) => {
      console.log(data);
    }, error => console.log(error))

 }


}
