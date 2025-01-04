import { Github, Mail } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export const config = {
  title: "portfolio", // <-- This is the title of the website
  name: "Lorem", // <-- This is your name

  publicUrl: "https://gamingklex.github.io/portfolio", // This is the URL where your website is hosted

  githubUrl: "https://github.com/GamingKlex/portfolio", // This is the URL to the GitHub repository of this page

  titleColor: "text-yellow-500",
  nameColor: "text-green-500",

  // This is the description that appears below your name
  description: (
    <>
      I am a <span className="font-bold">Web Developer</span> and{" "}
      <span className="font-bold">Designer</span> based in the USA{" "}
      <ReactCountryFlag countryCode="US" svg />.
    </>
  ),
  // This is another smaller description. Describe yourself really quickly!
  subdescription:
    "I specialize in building modern, responsive websites and web applications.",

  // Social links that appear in the footer
  socials: [
    {
      icon: <Github size={24} />,
      href: "https://github.com/",
    },
    {
      icon: (
        <img
          src="https://simpleicons.org/icons/discord.svg"
          alt="LinkedIn"
          className="w-6 h-6 group-hover:invert"
        />
      ),
      tooltip: "Discord: @username",
    },

    {
      icon: <Mail size={24} />,
      href: "mailto:lorem@example.com",
      tooltip: "lorem@example.com",
    },
  ],

  // The content of the about me page
  about: `
The same **markdown** that you use in the project descriptions is supported here as well!
`,

  // Projects that appear in the main section
  //   id: A unique identifier for the project
  //   title: The title of the project
  //   summary: A short description of the project
  //   body: A longer description of the project (markdown)
  //   img: The image that appears in the project card
  projects: [
    {
      id: "project1",
      title: "Project 1",
      summary:
        "This is a short description for my first project containing key information.",
      body: `
This is a longer description of my first project. 
### It supports markdown!
- Lists
- [Links](https://example.com)
- **Bold** and *italic* text
- \`Code\`
\`\`\`js
console.log("Hello, world!");
\`\`\`
And images...
![Image](https://via.placeholder.com/300)
Look at the GitHub Markdown guide for more information.
`,
      img: "https://via.placeholder.com/300",
    },
    {
      id: "project2",
      title: "Project 2",
      summary:
        "This is a short description for my second project containing key information.",
      body: ``,
      img: "https://via.placeholder.com/300",
    },
  ],
};
