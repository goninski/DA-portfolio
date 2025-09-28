import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  imgUrl: string = 'assets/img/fgonin-about.png';

  aboutMe: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis itaque deleniti eligendi ipsum, molestiae aut omnis quaerat magnam fugit odio iste minima sed tenetur dignissimos ea dolore pariatur numquam voluptatem!';

  located: string = 'Located in Zurich Switzerland';

  openMinded: string = 
    'visionary, dedicatec, open minded.';

  problemSolvingApproach: string = 
    'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.';




}
