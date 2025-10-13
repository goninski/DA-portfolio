import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule],
  templateUrl: './contactform.html',
  styleUrl: './contactform.scss'
})
export class Contactform {

  http = inject(HttpClient);

  contactData =  {
    name: "",
    email: "",
    message: "",
    gdpr: false,
  }

  mailTest = true;
  isSubmitted = 0;


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
