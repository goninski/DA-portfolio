import { ProjectInterface} from '../_interfaces/project.interface';

export const data = {
  title : {
    en : 'Featured Projects',
    de : 'Einige Projekte',
  },
  subtitle : {
    en : 'Portfolio',
    de : 'Portfolio',
  },
  description : {
    en : 'Explore a selection of my work here - Interact with projects to see my skills in action.',
    de : 'Erkunde eine Auswahl meiner Projekte und erlebe meine Skills live in Action',
  },
}

export const projects: ProjectInterface[] = [
  {
    id: '01',
    title: 'Join',
    description: {
      en : 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      de : 'join deutsch...',
    },
    githubUrl: 'https://github.com/goninski/DA-JOIN',
    demoUrl: 'https://da-join.francois-gonin.dev',
    previewImgUrl: 'assets/img/project-preview-join.jpg',
    tags: ['JavaScript', 'Firebase', 'CSS', 'HTML'], 
  },
  {
    id: '02',
    title: 'El Pollo Loco',
    description: {
      en : 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      de : 'pollo loco deutsch...',
    },
    githubUrl: 'https://github.com/goninski/DA-el-pollo-locco',
    demoUrl: 'https://da-pollo-loco.francois-gonin.dev',
    previewImgUrl: 'assets/img/project-preview-pollo-loco.jpg',
    tags: ['JavaScript', 'CSS', 'HTML'], 
  },
  {
    id: '03',
    title: 'Bubble',
    description: {
      en : 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      de : 'bubble deutsch...',
    },
    githubUrl: 'https://github.com/goninski/DA-bubble',
    demoUrl: 'https://da-bubble.francois-gonin.dev',
    previewImgUrl: 'assets/img/project-preview-bubble.jpg',
    tags: ['Angular', 'TypeScript', 'Firebase', 'CSS', 'HTML'], 
  }
]

