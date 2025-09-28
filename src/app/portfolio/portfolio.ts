import { Component } from '@angular/core';
import { ProjectInterface} from '../_interfaces/project.interface';
import { Project } from "../project/project";

@Component({
  selector: 'app-portfolio',
  imports: [Project],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  projects: ProjectInterface[] = [
    {
      title: 'Join',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubUrl: 'https://github.com/goninski/DA-JOIN',
      demoUrl: 'https://da-join.francois-gonin.dev',
      previewImgUrl: 'assets/img/project-preview-join.jpg',
      tags: ['JavaScript', 'Firebase', 'CSS', 'HTML'], 
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubUrl: 'https://github.com/goninski/DA-el-pollo-locco',
      demoUrl: 'https://da-pollo-loco.francois-gonin.dev',
      previewImgUrl: 'assets/img/project-preview-pollo-loco.jpg',
      tags: ['JavaScript', 'CSS', 'HTML'], 
    },
    {
      title: 'Bubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      githubUrl: 'https://github.com/goninski/DA-bubble',
      demoUrl: 'https://da-bubble.francois-gonin.dev',
      previewImgUrl: 'assets/img/project-preview-bubble.jpg',
      tags: ['Angular', 'TypeScript', 'Firebase', 'CSS', 'HTML'], 
    }
  ]

}
