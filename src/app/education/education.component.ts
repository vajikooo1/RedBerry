import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  
  school: any = "";
  qualityOfEdu: any = "";
  endDate: any = "";
  textArea:any = "";
  value: string = "";

  eduQuality = '';
	onSelected(value:string): void {
		this.eduQuality = value;
	}

  isAdditional: boolean = false;

  showAdditional() {
    this.isAdditional = !this.isAdditional;
  }

}
