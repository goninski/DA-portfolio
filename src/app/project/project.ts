import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../_interfaces/project.interface';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [LowerCasePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
isDialogueVisible = false;

@Input({ required: true }) project!: ProjectInterface;

openDialogue() {
  this.isDialogueVisible = true;
  document.body.classList.add('overflow-hidden');
}

closeDialogue() {
  this.isDialogueVisible = false;
  document.body.classList.remove('overflow-hidden');
}

}
