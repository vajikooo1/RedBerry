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
  userImage: any;
  email: string = "";
  phonenumber: number | undefined;
  
  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if(reader.result !== null){
        this.userImage = reader.result
      }
        
    };
}


}
