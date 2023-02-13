import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css'],
})
export class PersonalinfoComponent {
[x: string]: any;
  userName: any = "";
  lastName: any = "";
  Textarea: any = "";
  userImage: any;
  email: any = "";
  phonenumber: any = "";

  line1: boolean = false;

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

saveData() {
  
  localStorage.setItem('personalinfo1', this.userName)
  localStorage.setItem('personalinfo2', this.lastName)
  localStorage.setItem('personalinfo3', this.Textarea)
  localStorage.setItem('personalinfo4', this.email)
  localStorage.setItem('personalinfo5', this.phonenumber)
  localStorage.setItem('personalinfo6', this.userImage)

  this.line1 = true;


}

}
