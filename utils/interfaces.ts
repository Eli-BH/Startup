export interface ItemI {
  name: string;
}

export interface GptStateI {
  loading: boolean;
  error: null | string;
  suggestions: string[];
}

export interface ProjectI {
  title: string;
  approxDuration: string;
  documentationNeeded: string[];
  projectDescription: string;
  difficultyLevel: string;
  resources: string[];
  technologies: Technology[];
  terminalCommands: string;
}

interface Technology {
  name: string;
  version: string;
  url: string;

  puposeInProject: string;
  techType: string;
}
