import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css'],
})
export class PersonalinfoComponent {
  userName: string = "";
  lastName: string = "";
  Textarea: string = "";
  
}
