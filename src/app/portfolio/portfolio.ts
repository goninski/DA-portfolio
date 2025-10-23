import { Component, QueryList, ViewChildren } from '@angular/core';

import { Project } from "../project/project";
import { TranslatePipe } from '../_pipes/translate.pipe';
import { data } from './portfolio.data';
import { projects } from './portfolio.data';

@Component({
  selector: 'app-portfolio',
  imports: [Project, TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  data = data;
  projects = projects;
  isDialogueVisible: boolean = false;

  // openDialogue(index: number) {
  //     this.isDialogueVisible = true;
  //     document.body.classList.add('overflow-hidden');
  // }


  @ViewChildren(Project) projectComponents!: QueryList<Project>;

  handleShowNext(currentIndex: number) {
    const components = this.projectComponents.toArray();

    components[currentIndex].closeDialogue();

    const nextIndex = (currentIndex + 1) % components.length;

    components[nextIndex].openDialogue();
  }
}
