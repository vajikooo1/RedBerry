import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience: any;
  employer: any;
  startDate: any;
  endDate: any;
  txtArea: any;

  getUserName: any ='';
 

  isAdditional: boolean = false;
  
  ngOnInit() {
    this.getUserName = localStorage.getItem('personalinfo')
   }
 

  showAdditional() {
    this.isAdditional = !this.isAdditional;
  }


}


