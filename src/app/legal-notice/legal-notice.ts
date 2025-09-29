import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {

  content = [
      {
          "title": "Imprint",
          "content": [
              "François Gonin",
              "8604 Volketswil, Switzerland"
          ]
      },
      {
          "title": "Exploring the Board",
          "content": [
              "Email <a href=\"mailto:mail@francois-gonin.dev\">mail@francois-gonin.dev</a>"
          ]
      },
      {
          "title": "Acceptance of terms",
          "content": [
              "By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice."
          ]
      },
      {
          "title": "Scope and ownership of the product",
          "content": [
              "Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.",
              "The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited."
          ]
      },
      {
          "title": "Proprietary rights",
          "content": [
              "Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information."
          ]
      },
      {
          "title": "Use of the product",
          "content": [
              "Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio."
          ]
      },
      {
          "title": "Disclaimer of warranties and limitation of liability",
          "content": [
              "Portfolio is provided \"as is\" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio."
          ]
      },
      {
          "title": "Indemnity",
          "content": [
              "You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.",
              "For any questions or notices, please contact us at <a href=\"mailto:mail@francois-gonin.dev\">mail@francois-gonin.dev</a>",
              "Date: September 18, 2025"
          ]
      }
  ];

}
