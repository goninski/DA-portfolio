import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../_pipes/translate.pipe';
import { dataLabel, dataPlaceholder, dataError, dataGDPR } from './contactform.data';
import { langRoutes } from '../_shared/footer/footer.data';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contactform.html',
  styleUrl: './contactform.scss'
})
export class Contactform {
  dataLabel = dataLabel;
  dataPlaceholder = dataPlaceholder;
  dataError = dataError;
  dataGDPR = dataGDPR;
  langRoutes = langRoutes;

  contactData =  {
    name: "",
    email: "",
    message: "",
    gdpr: false,
  }

  http = inject(HttpClient);
  isSubmitted = 0;
  mailTest = window.location.hostname == 'localhost';

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            this.isSubmitted = 9;
            // console.error(error);
          },
          complete: () => {
            // console.info('send post complete');
            this.isSubmitted = 1;
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        this.isSubmitted = 1;
        ngForm.resetForm();
    }
  }

  autoResize(element: EventTarget | null): void {
    if (element) {
      const textarea = element as HTMLTextAreaElement;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
}
