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
    - projectDescription: <Brief description of the project about 2 paragraphs max explaining how to start, some tips,  and what the technologies are for in the project>
    - approxDuration: <Estimated time to complete the project>
    - documentationNeeded: [<Link to relevant documentation>]
    - terminalCommands: <e.g., npx create-react-app my-app> | none if not needed
    - resources: [<Links to additional resources or guides>]
    - difficultyLevel: <e.g., Beginner>
    
    The projects should be for a(n) ${difficulty}, achievable within a ${duration} timeframe, and should help in practicing development skills.
    Output answers without any introductory or conclusion text. 
    Make sure to include all information in the response. if there is a terminal command to get the project started, make sure to include it.
    It is also extremely import that the projects use the tecnologies listed in the array. If the array is empty, assume that the project can use any technology.

    `;
};
