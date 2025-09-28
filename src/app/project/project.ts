import { Component, input, output } from '@angular/core';
import { ProjectInterface } from '../_interfaces/project.interface';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [LowerCasePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
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