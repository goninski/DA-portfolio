import { Component, input, output } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

import { TranslatePipe } from '../_pipes/translate.pipe';
import { ProjectInterface } from '../_interfaces/project.interface';
import { data } from './project.data';

@Component({
  selector: 'app-project',
  imports: [LowerCasePipe, TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  data = data;
  project = input.required<ProjectInterface>();

  isDialogueVisible = false;

  showNext = output<void>();

  openDialogue() {
    this.isDialogueVisible = true;
    document.body.classList.add('overflow-hidden');
  }

  closeDialogue() {
    this.isDialogueVisible = false;
    document.body.classList.remove('overflow-hidden');
  }

}