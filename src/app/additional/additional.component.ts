import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})
export class AdditionalComponent {



  experience: string = '';
  employer: string = '';
  startDate: string = '';
  endDate: string = '';
  txtArea: string = '';

  school: any = "";
  qualityOfEdu: any = "";
  endDate2: any = "";
  textArea:any = "";
  value: string = "";

  eduQuality = '';
	onSelected(value:string): void {
		this.eduQuality = value;
	}



  @Input() additionalInfo: string = '';

}
