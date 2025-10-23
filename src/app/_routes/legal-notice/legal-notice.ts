import { Component } from '@angular/core';

import { data } from './legal-notice.data';
import { TranslatePipe } from '../../_pipes/translate.pipe';


@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  data = data;

}
