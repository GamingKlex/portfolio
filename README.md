# <h1 align="center">✨ portfolio ✨</h1>

<div align="center">
A simple yet <i>godly</i> smooth portfolio page where you can display your <b>projects, social links, about you and more</b>! <a href="https://gamingklex.github.io/portfolio/">View it in action here!</a>
</div>
<br/>
<p align="center">
    <img src="https://raw.githubusercontent.com/GamingKlex/portfolio/f690b99d3753cf93171c8c469ae5a549bd79f0bc/.github/preview.png" alt="Preview" width="600"/>
</p>
<br/>

## ✔️ Features

- ✨ **Simple** and **elegant design** with a monospace font!
- 📱 **Mobile friendly!**
- 📃 **Index**, **about** and **project** pages!
- ☁️ **Smooth animations** between the pages!
- ⚙️ **Easy configuration** for **customization**!
- 📑 Use **markdown** to modify the content of the pages!
- 📺 **Customizable social links** in the footer!
- 🚀 Easy to deploy to **github-pages** using a **workflow**!

## 🚀 Getting started

You want this beatiful portfolio for yourself? Great! <br/>

1. First, start by **creating a [fork of this repository](https://github.com/GamingKlex/portfolio/fork)**.
2. Next, you'll want to **modify the config** to suit your needs. You can find the config file at `src/config.jsx`.
      <details>
      <summary><- Here is a quick overview of the config</summary>

   ```jsx
   export const config = {
     title: "portfolio", // This is the title of the website
     name: "Lorem", // This is your name
     publicUrl: "https://gamingklex.github.io/portfolio", // This is the URL where your website is hosted
     githubUrl: "https://github.com/GamingKlex/portfolio", // This is the URL to the GitHub repository of this page
     titleColor: "text-yellow-500",
     nameColor: "text-green-500",
     // This is the description that appears below your name. You can use JSX here!
     description: "Hi, I'm cool! 😎",
     // This is another smaller description. Describe yourself really quickly!
     subdescription:
       "I'm a cool person who does cool things. I like cool stuff and I'm cool.",
     // Social links that appear in the footer, you can add more if you want! Leave empty to remove them.
     socials: [
       {
         icon: <Github size={24} />, // Can be any JSX element!
         href: "https://github.com/", // The URL to the social media (optional)
         tooltip: "GitHub: @username", // The tooltip that appears when hovering over the icon (optional)
       },
     ],
     // The content of the about me page
     about: `Here you can use **markdown** if you want!`,
     // Projects that appear in the main section
     projects: [
       {
         id: "coolcli", // This is the ID of the project, it should be unique!
         title: "CoolCLI", // The title of the project
         summary: "Look at this project from the cool person!", // A short summary of the project
         body: `This is the content of the project. You can use **markdown** here!`, // The content of the project with markdown
         img: "https://via.placeholder.com/300", // The image of the project
       },
       // - Add as many projects as you want!
     ],
   };
   ```

    </details>

   Look into the [`src/config.jsx`](https://github.com/GamingKlex/portfolio/blob/master/src/config.jsx) file for a more detailed example!

3. After you've configured everything, you can **deploy the page to GitHub pages**! <br/>
   Just push your changes to your repository and GitHub will automatically deploy the page for you! <br/>

   If you want to deploy the page to a different platform, you can build the page with `npm run build` and then host the `dist` folder on your server!

4. You may need to enable github pages for github actions in the settings of your repository:
   <img src="https://raw.githubusercontent.com/GamingKlex/portfolio/0d0606085fa0700a2c26bd3100538fae191200cd/.github/pagesFromActions.png" alt="Enable github pages" width="600"/>

5. **That's it!** You now have a beautiful portfolio page! 🎉

## 💻 Development

Setting things up for development is pretty easy! <br/>
Just...

1. install the latest Node version,
2. install dependencies with `npm install` and
3. run the project! `npm run dev`

## 🔑 License

[MIT License](https://github.com/GamingKlex/portfolio/blob/master/LICENSE.md)

<hr />

<small>No, there wil be no dark mode. :)</small>
