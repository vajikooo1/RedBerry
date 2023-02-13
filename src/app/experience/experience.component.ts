import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any;
  employer: any;
  startDate: any;
  endingDate: any;
  txtArea: any;


  getUserName: any = '';
  getlastName: any = '';
  getTextarea: any = '';
  getphonenumber: any = '';
  getEmail: any = '';
  getuserImage: any;

  isAdditional: boolean = false;

  ngOnInit() {
    
    this.getUserName = localStorage.getItem('personalinfo1');
    this.getlastName = localStorage.getItem('personalinfo2');
    this.getTextarea = localStorage.getItem('personalinfo3');
    this.getEmail = localStorage.getItem('personalinfo4');
    this.getphonenumber = localStorage.getItem('personalinfo5')
    this.getuserImage = localStorage.getItem('personalinfo6')

  }

  saveData() {

    localStorage.setItem('experience1', this.experience)
    localStorage.setItem('experience2', this.employer)
    localStorage.setItem('experience3', this.startDate)
    localStorage.setItem('experience4', this.endingDate)
    localStorage.setItem('experience5', this.txtArea)
  }


  showAdditional() {
    this.isAdditional = !this.isAdditional;
  }

}



