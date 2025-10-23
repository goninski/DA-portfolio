export interface ProjectInterface {
    id: string,
    title: string,
    description: {en: string, de: string},
    githubUrl: string,
    demoUrl: string,
    previewImgUrl: string,
    tags: string[],
}
