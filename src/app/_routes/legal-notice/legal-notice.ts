import { Component } from '@angular/core';

import { TranslatePipe } from '../../_pipes/translate.pipe';
import { data } from './legal-notice.data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  data = data;

}
