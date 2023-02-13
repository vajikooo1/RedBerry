import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  getUserName: any = '';
  getlastName: any = '';
  getTextarea: any = '';
  getEmail:any = '';
  getphonenumber: any = '';
  getuserImage: any = '';


  getExperience: any = '';
  getEmployer: any = '';
  getStartDate: any = '';
  getEndingDate: any = '';
  getTxtArea: any = '';

  getSchool: any = '';
  getQualityOfEdu: any = '';
  getEndDate: any = '';
  getTextArea: any = '';
  getValue: any = '';


  ngOnInit() {
    this.getUserName = localStorage.getItem('personalinfo1');
    this.getlastName = localStorage.getItem('personalinfo2');
    this.getTextarea = localStorage.getItem('personalinfo3');
    this.getEmail = localStorage.getItem('personalinfo4');
    this.getphonenumber = localStorage.getItem('personalinfo5')
    this.getuserImage = localStorage.getItem('personalinfo6')

    this.getExperience = localStorage.getItem('experience1');
    this.getEmployer = localStorage.getItem('experience2');
    this.getStartDate = localStorage.getItem('experience3');
    this.getEndDate = localStorage.getItem('experience4');
    this.getTxtArea = localStorage.getItem('experience5');

    this.getSchool = localStorage.getItem('education1');
    this.getQualityOfEdu = localStorage.getItem('education2');
    this.getEndDate = localStorage.getItem('education3');


  }


}
