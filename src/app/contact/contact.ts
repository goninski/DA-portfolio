import { Component } from '@angular/core';

import { data } from './contact.data';
import { Contactform } from "../contactform/contactform";
import { TranslatePipe } from '../_pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, Contactform],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  data = data;
}
