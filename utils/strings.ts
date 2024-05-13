export const prompt: string = `
Act as if you are a Senior level software developer
with 30 years of experience as a developer, recruiter,
and teacer. Suggest to me 4 ${"beginner"}-level projects
that I can complete in s ${"short"} amount of time using the
technologies listed in this array ${["React", "mongodb", "css"]}.
Please format your response with the following details for each project:
array of JSON opbjects with the following keys:

- Title: <Name of the project>
- Technologies: 
  [
    { title: "Technology Name", techType: "Type of Technology", purposeInProject: "Description of how it's used in the project" }
  ]
- Project Description: <Brief description of the project>
- Approx Duration: <Estimated time to complete the project>
- Documentation Needed: [<Link to relevant documentation>]
- Terminal Command to Start: <e.g., npx create-react-app my-app>
- Resources: [<Links to additional resources or guides>]
- Project Difficulty Level: <e.g., Beginner>

The projects should be for a(n) ${"beginner"}, achievable within a ${"short"} timeframe, and should help in practicing development skills.
Do not respond anything other thatn the 4 projects. Do not include any other information in the response other than the 4 projects
`;

export const formattedPrompt = (
  difficulty: string,
  duration: string,
  values: []
): string => {
  return `
    Without commentary. Act as if you are a Senior level software developer
    with 30 years of experience as a developer, recruiter,
    and teacer. Suggest to me 4 ${difficulty}-level projects
    that I can complete in s ${duration} amount of time using the
    technologies listed in this array ${values}.
    Please format your response with the following details for each project:
    array of JSON opbjects with the following keys:
    
    - title: <Name of the project>
    - technologies: 
      [
        { name: "Technology Name", version: "Version of the tech blank if none", techType: "Type of Technology", purposeInProject: "Description of how it's used in the project" , url: "link to the tech" }
      ]
    - projectDescription: <Brief description of the project about 1 paragraph explaining what will be learned, and what the technologies are for in the project>
    - approxDuration: <Estimated time to complete the project>
    - documentationNeeded: [<Link to relevant documentation>]
    - terminalCommands: <e.g., npx create-react-app my-app>
    - resources: [<Links to additional resources or guides>]
    - difficultyLevel: <e.g., Beginner>
    
    The projects should be for a(n) ${difficulty}, achievable within a ${duration} timeframe, and should help in practicing development skills.
    Output answers without any introductory or conclusion text. 
    Make sure to include all information in the response. if there is a terminal command to get the project started, make sure to include it.
    It is also extremely import that the projects use the tecnologies listed in the array. If the array is empty, assume that the project can use any technology.


    here are interfaces to help you format the response:
    interface Project {
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
    `;
};
