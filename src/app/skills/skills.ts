import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  intro: string =
    'A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.'

  skills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Firebase', 'Material Design', 'Git', 'REST-API',
  ]

  interested: string[] = [
    'React', 'Vue.js',
  ]

}
