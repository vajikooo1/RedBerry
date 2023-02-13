import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  school: any = "";
  qualityOfEdu: any = "";
  endDate: any = "";
  textArea: any = "";
  value: string = "";

  getUserName: any = '';
  getlastName: any = '';
  getTextarea: any = '';
  getphonenumber: any = '';
  getEmail: any = '';
  getuserImage: any;

  getExperience: any = '';
  getEmployer: any = '';
  getStartDate: any = '';
  getEndDate: any = '';
  getTxtArea: any = '';  


  
  ngOnInit() {

    this.getUserName = localStorage.getItem('personalinfo1');
    this.getlastName = localStorage.getItem('personalinfo2');
    this.getTextarea = localStorage.getItem('personalinfo3');
    this.getEmail = localStorage.getItem('personalinfo4');
    this.getphonenumber = localStorage.getItem('personalinfo5');
    this.getuserImage = localStorage.getItem('personalinfo6');

    this.getExperience = localStorage.getItem('experience1');
    this.getEmployer = localStorage.getItem('experience2');
    this.getStartDate = localStorage.getItem('experience3');
    this.getEndDate = localStorage.getItem('experience4')
    this.getTxtArea = localStorage.getItem('experience5')

  }

  saveData() {

    localStorage.setItem('education1', this.school)
    localStorage.setItem('education2', this.qualityOfEdu)
    localStorage.setItem('education3', this.endDate)
    localStorage.setItem('education4', this.textArea)
    localStorage.setItem('education5', this.value)

  }

  
  eduQuality = '';
	onSelected(value:string): void {
		this.eduQuality = value;
	}

  isAdditional: boolean = false;

  showAdditional() {
    this.isAdditional = !this.isAdditional;
  }


 




}
