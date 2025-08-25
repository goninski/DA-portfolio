import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule],
  templateUrl: './contactform.html',
  styleUrl: './contactform.scss'
})
export class Contactform {

  contactData =  {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log(this.contactData);
  }

}
